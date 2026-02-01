from fastapi import FastAPI, APIRouter, HTTPException, Depends, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Lead Models
class ContactLead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    trade: str
    areas: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = Field(default="new")

class ContactLeadCreate(BaseModel):
    name: str
    email: EmailStr
    trade: str
    areas: str
    message: str

class ContactLeadResponse(BaseModel):
    id: str
    name: str
    email: str
    trade: str
    areas: str
    message: str
    created_at: str
    status: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Swift Website & SEO Services API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Lead Routes
@api_router.post("/leads", response_model=ContactLeadResponse)
async def create_lead(input: ContactLeadCreate):
    lead_dict = input.model_dump()
    lead_obj = ContactLead(**lead_dict)
    
    doc = lead_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contact_leads.insert_one(doc)
    
    return ContactLeadResponse(
        id=doc['id'],
        name=doc['name'],
        email=doc['email'],
        trade=doc['trade'],
        areas=doc['areas'],
        message=doc['message'],
        created_at=doc['created_at'],
        status=doc['status']
    )

@api_router.get("/leads", response_model=List[ContactLeadResponse])
async def get_leads(
    status: Optional[str] = Query(None, description="Filter by status"),
    limit: int = Query(100, ge=1, le=500)
):
    query = {}
    if status:
        query['status'] = status
    
    leads = await db.contact_leads.find(query, {"_id": 0}).sort("created_at", -1).to_list(limit)
    
    return [
        ContactLeadResponse(
            id=lead['id'],
            name=lead['name'],
            email=lead['email'],
            trade=lead['trade'],
            areas=lead['areas'],
            message=lead['message'],
            created_at=lead['created_at'],
            status=lead['status']
        )
        for lead in leads
    ]

@api_router.patch("/leads/{lead_id}/status")
async def update_lead_status(lead_id: str, status: str = Query(...)):
    result = await db.contact_leads.update_one(
        {"id": lead_id},
        {"$set": {"status": status}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Lead not found")
    
    return {"message": "Status updated", "lead_id": lead_id, "status": status}

@api_router.delete("/leads/{lead_id}")
async def delete_lead(lead_id: str):
    result = await db.contact_leads.delete_one({"id": lead_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Lead not found")
    
    return {"message": "Lead deleted", "lead_id": lead_id}

@api_router.get("/leads/stats")
async def get_leads_stats():
    total = await db.contact_leads.count_documents({})
    new_count = await db.contact_leads.count_documents({"status": "new"})
    contacted = await db.contact_leads.count_documents({"status": "contacted"})
    converted = await db.contact_leads.count_documents({"status": "converted"})
    
    return {
        "total": total,
        "new": new_count,
        "contacted": contacted,
        "converted": converted
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

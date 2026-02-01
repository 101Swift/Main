import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  Users, 
  Mail, 
  Phone, 
  RefreshCw, 
  Trash2,
  CheckCircle,
  Clock,
  TrendingUp
} from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const statusColors = {
  new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  contacted: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  converted: "bg-green-500/20 text-green-400 border-green-500/30"
};

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, converted: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const [leadsRes, statsRes] = await Promise.all([
        axios.get(`${API}/leads${filter !== "all" ? `?status=${filter}` : ""}`),
        axios.get(`${API}/leads/stats`)
      ]);
      setLeads(leadsRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast.error("Failed to fetch leads");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const updateStatus = async (leadId, newStatus) => {
    try {
      await axios.patch(`${API}/leads/${leadId}/status?status=${newStatus}`);
      toast.success("Status updated");
      fetchLeads();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const deleteLead = async (leadId) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    
    try {
      await axios.delete(`${API}/leads/${leadId}`);
      toast.success("Lead deleted");
      fetchLeads();
    } catch (error) {
      console.error("Error deleting lead:", error);
      toast.error("Failed to delete lead");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="bg-[#0A0A0A] pt-20 min-h-screen" data-testid="admin-page">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-2 block">
                Admin Dashboard
              </span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-white">
                Lead Management
              </h1>
            </div>
            <Button 
              onClick={fetchLeads}
              className="bg-[#121212] border border-white/10 text-white hover:bg-white/5 rounded-none"
              data-testid="refresh-btn"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-white/10" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#121212] border border-white/10 p-6" data-testid="stat-total">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#FF5500]" />
                <span className="text-zinc-400 text-sm uppercase">Total</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-[#121212] border border-white/10 p-6" data-testid="stat-new">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-zinc-400 text-sm uppercase">New</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.new}</p>
            </div>
            <div className="bg-[#121212] border border-white/10 p-6" data-testid="stat-contacted">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-zinc-400 text-sm uppercase">Contacted</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.contacted}</p>
            </div>
            <div className="bg-[#121212] border border-white/10 p-6" data-testid="stat-converted">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-zinc-400 text-sm uppercase">Converted</span>
              </div>
              <p className="text-3xl font-bold text-white">{stats.converted}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leads Table */}
      <section className="py-8" data-testid="leads-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-zinc-400 text-sm">Filter:</span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger 
                className="w-40 bg-[#121212] border border-white/10 text-white rounded-none"
                data-testid="filter-select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#121212] border border-white/10">
                <SelectItem value="all" className="text-white">All Leads</SelectItem>
                <SelectItem value="new" className="text-white">New</SelectItem>
                <SelectItem value="contacted" className="text-white">Contacted</SelectItem>
                <SelectItem value="converted" className="text-white">Converted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          {isLoading ? (
            <div className="text-center py-12" data-testid="loading">
              <RefreshCw className="w-8 h-8 text-[#FF5500] animate-spin mx-auto mb-4" />
              <p className="text-zinc-400">Loading leads...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-12 bg-[#121212] border border-white/10" data-testid="no-leads">
              <Users className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
              <p className="text-zinc-400">No leads found</p>
            </div>
          ) : (
            <div className="bg-[#121212] border border-white/10 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-zinc-400 uppercase text-xs tracking-wider">Name</TableHead>
                    <TableHead className="text-zinc-400 uppercase text-xs tracking-wider">Email</TableHead>
                    <TableHead className="text-zinc-400 uppercase text-xs tracking-wider">Trade</TableHead>
                    <TableHead className="text-zinc-400 uppercase text-xs tracking-wider">Areas</TableHead>
                    <TableHead className="text-zinc-400 uppercase text-xs tracking-wider">Status</TableHead>
                    <TableHead className="text-zinc-400 uppercase text-xs tracking-wider">Date</TableHead>
                    <TableHead className="text-zinc-400 uppercase text-xs tracking-wider">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead, index) => (
                    <TableRow 
                      key={lead.id} 
                      className="border-white/10 hover:bg-white/5"
                      data-testid={`lead-row-${index + 1}`}
                    >
                      <TableCell className="text-white font-medium">{lead.name}</TableCell>
                      <TableCell className="text-zinc-400">
                        <a href={`mailto:${lead.email}`} className="hover:text-[#FF5500]">
                          {lead.email}
                        </a>
                      </TableCell>
                      <TableCell className="text-zinc-400">{lead.trade}</TableCell>
                      <TableCell className="text-zinc-400 max-w-[150px] truncate">{lead.areas}</TableCell>
                      <TableCell>
                        <Select 
                          value={lead.status} 
                          onValueChange={(value) => updateStatus(lead.id, value)}
                        >
                          <SelectTrigger className={`w-28 h-8 border rounded-none text-xs ${statusColors[lead.status]}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-[#121212] border border-white/10">
                            <SelectItem value="new" className="text-white">New</SelectItem>
                            <SelectItem value="contacted" className="text-white">Contacted</SelectItem>
                            <SelectItem value="converted" className="text-white">Converted</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-zinc-500 text-sm">{formatDate(lead.created_at)}</TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => deleteLead(lead.id)}
                          className="text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-none"
                          data-testid={`delete-lead-${index + 1}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Lead Details Modal could be added here */}
        </div>
      </section>
    </div>
  );
}

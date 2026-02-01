#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class SwiftWebSEOAPITester:
    def __init__(self, base_url="https://swift-web-solutions.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=headers, params=params, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            if success:
                self.log_test(name, True)
                try:
                    return True, response.json()
                except:
                    return True, response.text
            else:
                self.log_test(name, False, f"Expected {expected_status}, got {response.status_code}")
                return False, {}

        except Exception as e:
            self.log_test(name, False, f"Request error: {str(e)}")
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_create_lead(self):
        """Test creating a contact lead"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": f"test{datetime.now().strftime('%H%M%S')}@example.com",
            "trade": "Plumber",
            "areas": "London, Surrey",
            "message": "Test message for API testing"
        }
        
        success, response = self.run_test("Create Lead", "POST", "leads", 200, data=test_data)
        if success and 'id' in response:
            return response['id']
        return None

    def test_get_leads(self):
        """Test getting all leads"""
        return self.run_test("Get All Leads", "GET", "leads", 200)

    def test_get_leads_with_filter(self):
        """Test getting leads with status filter"""
        return self.run_test("Get Leads (New Status)", "GET", "leads", 200, params={"status": "new"})

    def test_get_leads_stats(self):
        """Test getting lead statistics"""
        success, response = self.run_test("Get Lead Stats", "GET", "leads/stats", 200)
        if success:
            required_fields = ['total', 'new', 'contacted', 'converted']
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                self.log_test("Lead Stats Structure", False, f"Missing fields: {missing_fields}")
                return False
            else:
                self.log_test("Lead Stats Structure", True)
        return success

    def test_update_lead_status(self, lead_id):
        """Test updating lead status"""
        if not lead_id:
            self.log_test("Update Lead Status", False, "No lead ID provided")
            return False
        
        return self.run_test("Update Lead Status", "PATCH", f"leads/{lead_id}/status", 200, params={"status": "contacted"})

    def test_delete_lead(self, lead_id):
        """Test deleting a lead"""
        if not lead_id:
            self.log_test("Delete Lead", False, "No lead ID provided")
            return False
        
        return self.run_test("Delete Lead", "DELETE", f"leads/{lead_id}", 200)

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Swift Website & SEO Services API Tests")
        print(f"Testing against: {self.base_url}")
        print("=" * 60)

        # Test API root
        self.test_api_root()

        # Test lead creation and get the ID for further tests
        lead_id = self.test_create_lead()

        # Test getting leads
        self.test_get_leads()
        self.test_get_leads_with_filter()

        # Test lead statistics
        self.test_get_leads_stats()

        # Test lead management (if we have a lead ID)
        if lead_id:
            self.test_update_lead_status(lead_id)
            # Note: We'll skip delete test to keep the lead for frontend testing
            # self.test_delete_lead(lead_id)
        
        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return 0
        else:
            print("⚠️  Some tests failed. Check the details above.")
            return 1

def main():
    tester = SwiftWebSEOAPITester()
    return tester.run_all_tests()

if __name__ == "__main__":
    sys.exit(main())
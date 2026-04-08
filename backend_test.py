#!/usr/bin/env python3
"""
NestMark Solutions API Backend Testing
Tests all specified endpoints with comprehensive validation
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from the review request
BASE_URL = "https://marks-3d-ui.preview.emergentagent.com/api"

def print_test_header(test_name):
    """Print formatted test header"""
    print(f"\n{'='*60}")
    print(f"🧪 {test_name}")
    print(f"{'='*60}")

def print_result(success, message, details=None):
    """Print formatted test result"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")
    if details:
        print(f"   Details: {details}")

def test_root_endpoint():
    """Test GET /api/ - Root endpoint"""
    print_test_header("Testing Root Endpoint")
    
    try:
        response = requests.get(f"{BASE_URL}/", timeout=10)
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Check response structure
        data = response.json()
        
        # Validate required fields
        if "message" not in data:
            print_result(False, "Missing 'message' field in response")
            return False
        
        if "version" not in data:
            print_result(False, "Missing 'version' field in response")
            return False
        
        # Validate content
        expected_message = "NestMark Solutions API - Ready"
        if data["message"] != expected_message:
            print_result(False, f"Expected message '{expected_message}', got '{data['message']}'")
            return False
        
        if data["version"] != "1.0.0":
            print_result(False, f"Expected version '1.0.0', got '{data['version']}'")
            return False
        
        print_result(True, "Root endpoint working correctly")
        print(f"   Response: {json.dumps(data, indent=2)}")
        return True
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_result(False, f"Invalid JSON response: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_services_endpoint():
    """Test GET /api/services - Fetch all services"""
    print_test_header("Testing Services Endpoint")
    
    try:
        response = requests.get(f"{BASE_URL}/services", timeout=10)
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Check response structure
        data = response.json()
        
        # Validate it's a list
        if not isinstance(data, list):
            print_result(False, f"Expected list response, got {type(data)}")
            return False
        
        # Check expected count (11 services from seed data)
        expected_count = 11
        if len(data) != expected_count:
            print_result(False, f"Expected {expected_count} services, got {len(data)}")
            return False
        
        # Validate service structure
        for i, service in enumerate(data):
            required_fields = ["_id", "title", "description", "icon", "featured"]
            for field in required_fields:
                if field not in service:
                    print_result(False, f"Service {i} missing required field '{field}'")
                    return False
        
        # Check for specific services from seed data
        service_titles = [service["title"] for service in data]
        expected_titles = ["Performance Marketing", "Search Engine Optimization", "Social Media Marketing"]
        
        for title in expected_titles:
            if title not in service_titles:
                print_result(False, f"Expected service '{title}' not found")
                return False
        
        print_result(True, f"Services endpoint working correctly - returned {len(data)} services")
        print(f"   Sample service: {json.dumps(data[0], indent=2)}")
        return True
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_result(False, f"Invalid JSON response: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_blogs_endpoint():
    """Test GET /api/blogs - Fetch all blogs"""
    print_test_header("Testing Blogs Endpoint")
    
    try:
        response = requests.get(f"{BASE_URL}/blogs", timeout=10)
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Check response structure
        data = response.json()
        
        # Validate it's a list
        if not isinstance(data, list):
            print_result(False, f"Expected list response, got {type(data)}")
            return False
        
        # Check expected count (4 blogs from seed data)
        expected_count = 4
        if len(data) != expected_count:
            print_result(False, f"Expected {expected_count} blogs, got {len(data)}")
            return False
        
        # Validate blog structure
        for i, blog in enumerate(data):
            required_fields = ["_id", "title", "excerpt", "author", "date", "readTime", "slug", "featured"]
            for field in required_fields:
                if field not in blog:
                    print_result(False, f"Blog {i} missing required field '{field}'")
                    return False
        
        # Check for specific blogs from seed data
        blog_titles = [blog["title"] for blog in data]
        expected_title = "The rise of AI in digital marketing 2024 game changing strategies"
        
        if expected_title not in blog_titles:
            print_result(False, f"Expected blog '{expected_title}' not found")
            return False
        
        print_result(True, f"Blogs endpoint working correctly - returned {len(data)} blogs")
        print(f"   Sample blog: {json.dumps(data[0], indent=2)}")
        return True
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_result(False, f"Invalid JSON response: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_blogs_pagination():
    """Test GET /api/blogs?limit=2 - Test pagination"""
    print_test_header("Testing Blogs Pagination")
    
    try:
        response = requests.get(f"{BASE_URL}/blogs?limit=2", timeout=10)
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Check response structure
        data = response.json()
        
        # Validate it's a list
        if not isinstance(data, list):
            print_result(False, f"Expected list response, got {type(data)}")
            return False
        
        # Check limit is respected
        if len(data) != 2:
            print_result(False, f"Expected 2 blogs with limit=2, got {len(data)}")
            return False
        
        # Validate blog structure
        for i, blog in enumerate(data):
            required_fields = ["_id", "title", "excerpt", "author", "date", "readTime", "slug", "featured"]
            for field in required_fields:
                if field not in blog:
                    print_result(False, f"Blog {i} missing required field '{field}'")
                    return False
        
        print_result(True, f"Blogs pagination working correctly - returned {len(data)} blogs with limit=2")
        print(f"   First blog: {data[0]['title']}")
        print(f"   Second blog: {data[1]['title']}")
        return True
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_result(False, f"Invalid JSON response: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def test_contact_submission():
    """Test POST /api/contact - Submit contact form"""
    print_test_header("Testing Contact Form Submission")
    
    # Test data as specified in the review request
    contact_data = {
        "firstName": "Test User",
        "phone": "+919876543210",
        "email": "test@example.com",
        "message": "This is a test message from automated testing"
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/contact", 
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        # Check status code
        if response.status_code != 201:
            print_result(False, f"Expected status 201, got {response.status_code}")
            print(f"   Response: {response.text}")
            return False
        
        # Check response structure
        data = response.json()
        
        # Validate required fields
        if "message" not in data:
            print_result(False, "Missing 'message' field in response")
            return False
        
        if "contactId" not in data:
            print_result(False, "Missing 'contactId' field in response")
            return False
        
        # Validate content
        if "successfully" not in data["message"].lower():
            print_result(False, f"Unexpected message: {data['message']}")
            return False
        
        # Validate contactId is not empty
        if not data["contactId"]:
            print_result(False, "contactId is empty")
            return False
        
        print_result(True, "Contact form submission working correctly")
        print(f"   Response: {json.dumps(data, indent=2)}")
        return True, data["contactId"]
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False, None
    except json.JSONDecodeError as e:
        print_result(False, f"Invalid JSON response: {str(e)}")
        return False, None
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False, None

def test_contacts_retrieval():
    """Test GET /api/contact - Fetch all contact submissions"""
    print_test_header("Testing Contacts Retrieval")
    
    try:
        response = requests.get(f"{BASE_URL}/contact", timeout=10)
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Check response structure
        data = response.json()
        
        # Validate it's a list
        if not isinstance(data, list):
            print_result(False, f"Expected list response, got {type(data)}")
            return False
        
        # Should have at least the test contact we just submitted
        if len(data) == 0:
            print_result(False, "No contacts found - expected at least the test submission")
            return False
        
        # Validate contact structure
        for i, contact in enumerate(data):
            required_fields = ["_id", "firstName", "phone", "email", "message", "status", "created_at"]
            for field in required_fields:
                if field not in contact:
                    print_result(False, f"Contact {i} missing required field '{field}'")
                    return False
        
        # Check if our test contact is in the list
        test_contact_found = False
        for contact in data:
            if (contact["firstName"] == "Test User" and 
                contact["email"] == "test@example.com" and
                "automated testing" in contact["message"]):
                test_contact_found = True
                break
        
        if not test_contact_found:
            print_result(False, "Test contact submission not found in contacts list")
            return False
        
        print_result(True, f"Contacts retrieval working correctly - returned {len(data)} contacts")
        print(f"   Test contact found in the list")
        print(f"   Sample contact: {json.dumps(data[0], indent=2)}")
        return True
        
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_result(False, f"Invalid JSON response: {str(e)}")
        return False
    except Exception as e:
        print_result(False, f"Unexpected error: {str(e)}")
        return False

def run_all_tests():
    """Run all API tests"""
    print(f"\n🚀 Starting NestMark Solutions API Testing")
    print(f"Backend URL: {BASE_URL}")
    print(f"Test Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    results = []
    
    # Test 1: Root endpoint
    results.append(("Root Endpoint", test_root_endpoint()))
    
    # Test 2: Services endpoint
    results.append(("Services Endpoint", test_services_endpoint()))
    
    # Test 3: Blogs endpoint
    results.append(("Blogs Endpoint", test_blogs_endpoint()))
    
    # Test 4: Blogs pagination
    results.append(("Blogs Pagination", test_blogs_pagination()))
    
    # Test 5: Contact submission
    contact_result = test_contact_submission()
    if isinstance(contact_result, tuple):
        results.append(("Contact Submission", contact_result[0]))
    else:
        results.append(("Contact Submission", contact_result))
    
    # Test 6: Contacts retrieval
    results.append(("Contacts Retrieval", test_contacts_retrieval()))
    
    # Print summary
    print(f"\n{'='*60}")
    print(f"📊 TEST SUMMARY")
    print(f"{'='*60}")
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\n📈 Results: {passed} passed, {failed} failed out of {len(results)} tests")
    
    if failed == 0:
        print("🎉 All tests passed! API is working correctly.")
        return True
    else:
        print("⚠️  Some tests failed. Please check the details above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)
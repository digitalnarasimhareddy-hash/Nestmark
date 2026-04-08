# API Contracts & Integration Plan

## Overview
This document outlines the backend implementation plan for the NestMark Solutions 3D website, including API contracts, database schema, and frontend-backend integration strategy.

---

## 1. Database Schema (MongoDB)

### Collections:

#### **services**
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  icon: String,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### **blogs**
```javascript
{
  _id: ObjectId,
  title: String,
  excerpt: String,
  content: String,
  author: String,
  date: Date,
  readTime: String,
  slug: String,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### **contacts**
```javascript
{
  _id: ObjectId,
  firstName: String,
  phone: String,
  email: String,
  message: String,
  status: String, // "new", "read", "responded"
  createdAt: Date
}
```

---

## 2. API Endpoints

### Services API

**GET /api/services**
- Description: Get all services
- Response: `{ services: [...] }`

**GET /api/services/:id**
- Description: Get single service by ID
- Response: `{ service: {...} }`

**POST /api/services** (Admin)
- Description: Create new service
- Body: `{ title, description, icon, featured }`
- Response: `{ service: {...} }`

---

### Blogs API

**GET /api/blogs**
- Description: Get all blogs
- Query Params: `?limit=10&featured=true`
- Response: `{ blogs: [...] }`

**GET /api/blogs/:slug**
- Description: Get single blog by slug
- Response: `{ blog: {...} }`

**POST /api/blogs** (Admin)
- Description: Create new blog post
- Body: `{ title, excerpt, content, author, readTime, slug, featured }`
- Response: `{ blog: {...} }`

---

### Contact API

**POST /api/contact**
- Description: Submit contact form
- Body: `{ firstName, phone, email, message }`
- Response: `{ message: "Contact submitted successfully", contactId: "..." }`

**GET /api/contacts** (Admin)
- Description: Get all contact submissions
- Response: `{ contacts: [...] }`

---

## 3. Mocked Data in Frontend

### Current Mock Files:
- `/app/frontend/src/data/mock.js`
  - `mockServices` - Will be replaced with API call to `/api/services`
  - `mockBlogs` - Will be replaced with API call to `/api/blogs`
  - `mockFeatures` - Static data (no backend needed)
  - `mockStats` - Static data (no backend needed)
  - `heroCards` - Static data (no backend needed)

### Files to Update:
1. **ServicesSection.jsx** - Replace `mockServices` with API call
2. **BlogSection.jsx** - Replace `mockBlogs` with API call
3. **ContactSection.jsx** - Add API call to submit form

---

## 4. Frontend-Backend Integration

### API Service Layer
Create `/app/frontend/src/services/api.js`:
```javascript
// Centralized API service
- getServices()
- getBlogPosts()
- submitContact(data)
```

### Component Updates:

#### ServicesSection.jsx
- Add `useState` for services data
- Add `useEffect` to fetch services from API
- Add loading state
- Add error handling

#### BlogSection.jsx
- Add `useState` for blogs data
- Add `useEffect` to fetch blogs from API
- Add loading state
- Add error handling

#### ContactSection.jsx
- Keep existing form state
- Update `handleSubmit` to call API
- Add success/error toast notifications
- Reset form on success

---

## 5. Implementation Steps

### Step 1: Backend Setup
1. Create MongoDB models for Services, Blogs, Contacts
2. Implement CRUD API endpoints
3. Add validation and error handling
4. Seed initial data from mock.js

### Step 2: API Service Layer
1. Create centralized API service in frontend
2. Add axios interceptors for error handling
3. Add loading states management

### Step 3: Frontend Integration
1. Update ServicesSection to use API
2. Update BlogSection to use API
3. Update ContactSection to use API
4. Remove mock.js imports from updated components

### Step 4: Testing
1. Test all API endpoints
2. Test frontend-backend integration
3. Test form submissions
4. Test error scenarios

---

## 6. Environment Variables

### Backend (.env)
- `MONGO_URL` - Already configured
- `DB_NAME` - Already configured

### Frontend (.env)
- `REACT_APP_BACKEND_URL` - Already configured

---

## 7. Success Criteria

✅ All services displayed from database
✅ All blog posts displayed from database  
✅ Contact form submits to backend successfully
✅ Form validation working
✅ Loading states displayed properly
✅ Error handling working
✅ Toast notifications working
✅ No breaking changes to existing UI/UX

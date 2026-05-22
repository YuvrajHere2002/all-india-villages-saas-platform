All India Villages SaaS Platform 🚀

REFER THE DOCS UPLOADED FOR BETTER TEXT UNDERSTANDING OF THIS README FILE !!

A production-style Full Stack SaaS platform that provides a comprehensive REST API for India's village-level geographical data.

Built using:

React.js
Node.js
Express.js
PostgreSQL
JWT Authentication
Recharts
Python ETL Pipeline
📌 Project Overview

This platform provides a centralized API infrastructure for accessing standardized Indian geographical hierarchy data:

Country → State → District → Subdistrict → Village

The system is designed for:

B2B applications
E-commerce platforms
Logistics companies
Address autocomplete systems
Government data services
🚀 Key Features
✅ Authentication & Security
User Registration
User Login
JWT Authentication
Protected APIs
API Key Generation
Password Hashing using bcrypt
✅ Data Engineering
ETL Pipeline using Python
Excel Dataset Processing
Automated Data Import
PostgreSQL Normalized Database
✅ Search Engine
Real-time Village Search
Live Autocomplete
Hierarchical Address Results
Pagination Support
✅ Analytics Dashboard
Total States
Total Districts
Total Subdistricts
Total Villages
Interactive Charts using Recharts
✅ SaaS Architecture
REST APIs
Modular Backend Structure
Protected Routes
Scalable Database Design
API Infrastructure
🏗️ Tech Stack
Technology	Usage
React.js	Frontend
Vite	Frontend Build Tool
Tailwind CSS	UI Styling
Node.js	Backend Runtime
Express.js	API Server
PostgreSQL	Database
Python	ETL/Data Processing
JWT	Authentication
bcryptjs	Password Security
UUID	API Key Generation
Recharts	Data Visualization
📂 Project Structure
Capstone Project
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   └── App.jsx
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── db.js
│   └── server.js
│
├── data-engineering
│   ├── import_data.py
│   ├── inspect_dataset.py
│
└── README.md
🗄️ Database Architecture

The platform uses a normalized PostgreSQL schema:

States
   ↓
Districts
   ↓
Subdistricts
   ↓
Villages

Additional tables:

users
api_keys
🔐 Authentication Flow
User Login
    ↓
JWT Token Generated
    ↓
Token Stored in LocalStorage
    ↓
Protected API Access
🔑 API Key Infrastructure

Authenticated users can generate API keys for consuming APIs securely.

Example:

POST /api/v1/generate-api-key
📊 Analytics Example

The platform currently supports:

28 States
510 Districts
5205 Subdistricts
537,611 Villages
🔍 Search API Example
GET /api/v1/search?q=ram&page=1

Example Response:

{
  "results": [
    {
      "village_name": "Rampur",
      "subdistrict_name": "Akkalkuwa",
      "district_name": "Nandurbar",
      "state_name": "MAHARASHTRA"
    }
  ]
}
🧠 ETL Pipeline

The ETL process:

Reads Excel datasets
Cleans raw government data
Normalizes hierarchy
Imports into PostgreSQL

Implemented using Python and Pandas.

⚡ Performance Optimizations
Indexed Search Queries
Pagination APIs
Optimized SQL Queries
Modular Backend Architecture
🖥️ Frontend Features
Login/Register UI
Protected Dashboard
Real-time Search
Analytics Charts
Responsive Design
🚀 Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/YuvrajHere2002/all-india-villages-saas-platform.git
2️⃣ Backend Setup
cd backend
npm install
node server.js
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
4️⃣ PostgreSQL Setup

Create database:

CREATE DATABASE villages_db;

Import schema and datasets using ETL scripts.

📸 Screenshots
Dashboard
Analytics Cards
Charts
Real-time Search
Authentication
Login Page
Register Page
APIs
JWT Protected Routes
API Key Generation
🧪 API Endpoints
Method	Endpoint	Description
POST	/register	Register User
POST	/login	Login User
GET	/analytics	Analytics Data
GET	/search	Village Search
POST	/generate-api-key	Generate API Key
🔮 Future Improvements
Redis Caching
Rate Limiting
Admin Dashboard
NeonDB Deployment
Vercel Deployment
Advanced Analytics
API Usage Tracking
🎯 Learning Outcomes

This project demonstrates:

Full Stack Development
Database Engineering
Authentication Systems
SaaS Architecture
REST API Design
ETL/Data Engineering
Real-world Problem Solving
👨‍💻 Author
Yuvraj Mishra

GitHub:
YuvrajHere2002 GitHub

🏁 Final Note

This project was developed as a production-style capstone project simulating real-world SaaS platform engineering using large-scale Indian geographical datasets.

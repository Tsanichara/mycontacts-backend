# MyContacts Backend

## 📌 Project Overview
MyContacts is a RESTful API built with Node.js and Express that allows users to register, authenticate, and manage their contacts securely. The backend handles user authentication using JWT and stores contact details in a MongoDB database.

## 🚀 Features
- User registration with hashed passwords
- User authentication using JWT
- CRUD operations for contacts
- Middleware-based error handling

## 🛠️ Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose ODM)
- **bcrypt.js** (Password hashing)
- **jsonwebtoken** (JWT authentication)
- **dotenv** (Environment variable management)

## 📂 Project Structure
```
mycontacts-backend/
├── config/              # Database configuration
├── controllers/         # Route controllers
├── middleware/         # Custom middleware
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── .env                # Environment variables
├── server.js           # Entry point of the application
├── package.json        # Dependencies and scripts
```

## 🔥 API Endpoints
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| POST   | /api/users/register | Register a new user |
| POST   | /api/users/login    | Authenticate user & get token |
| GET    | /api/contacts       | Get all contacts (protected) |
| GET    | /api/contacts/:id   | Get a single contact (protected) |
| POST   | /api/contacts       | Create a new contact (protected) |
| PUT    | /api/contacts/:id   | Update contact (protected) |
| DELETE | /api/contacts/:id   | Delete contact (protected) |

## 🛡️ Authentication
All protected routes require a **JWT token** to be passed in the request header:
```
Authorization: Bearer <your_token>
```
Tokens are issued upon successful login.



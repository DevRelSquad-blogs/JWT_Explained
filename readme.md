# Simple JWT Authentication Demo

A basic demonstration of JWT (JSON Web Token) authentication using Express.js. This project shows how to implement token-based authentication with protected routes.

## 🚀 Features

- Basic JWT authentication
- Protected route example
- Express.js REST API
- Simple token verification middleware

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install express jsonwebtoken body-parser
```

## 🔧 Environment Setup

Create a `.env` file in the root directory:
```env
JWT_SECRET=your_secret_key
PORT=3000
```

## 🏃‍♂️ Quick Start

```bash
# Start the server
node server.js
```

## 🔍 API Endpoints

### Authentication
```
POST /login
- Generates JWT token
- Body: { "username": "your_username" }
```

### Protected Route
```
GET /protected
- Requires JWT token in Authorization header
- Returns protected data
```

## 📝 Usage Example

### Login and Get Token
```javascript
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'testuser'
  })
})
.then(res => res.json())
.then(data => console.log(data.token));
```

### Access Protected Route
```javascript
fetch('http://localhost:3000/protected', {
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

## 🔒 Security Note
In production:
- Use a strong secret key
- Store sensitive data in environment variables
- Implement proper error handling
- Add input validation




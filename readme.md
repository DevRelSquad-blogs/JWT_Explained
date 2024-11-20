# JWT Authentication Implementation

A secure and scalable JSON Web Token (JWT) authentication system implementation. This project demonstrates how to implement token-based authentication in a Node.js application with best practices.

## Features

- 🔐 JWT-based authentication
- 🚀 Express.js REST API
- ✨ Token refresh mechanism
- 🛡️ Protected routes
- 🔄 Middleware for token verification

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start the server
npm start
```

## Environment Variables

```env
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
PORT=3000
```

## API Endpoints

### Auth Routes
```
POST /api/auth/login     - Login user
POST /api/auth/register  - Register new user
POST /api/auth/refresh   - Refresh token
```

### Protected Routes
```
GET /api/user/profile    - Get user profile
PUT /api/user/profile    - Update user profile
```

## Usage Example

```javascript
// Login and get token
fetch('http://localhost:3000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

// Use token in protected routes
fetch('http://localhost:3000/api/user/profile', {
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN'
  }
});
```

## Security Features

- Token expiration
- HTTP-only cookies
- CORS protection
- Rate limiting
- XSS protection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
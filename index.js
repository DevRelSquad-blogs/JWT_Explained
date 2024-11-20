const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Secret key (store securely in production)
const SECRET_KEY = 'hehe';

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login route - generates JWT
app.post('/login', (req, res) => {
  // Validate user credentials (simplified for example)
  const username = req.body.username;

  const user = {
    id: 1,
    username: username,
    role: 'user'
  };

  // Generate JWT
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    
  res.json({ data: 'Protected data', user: req.user });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

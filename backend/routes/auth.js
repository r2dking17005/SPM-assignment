const express = require('express');
const crypto = require('crypto');
const validateLogin = require('../middleware/validateLogin');
const users = require('../data/users');
const router = express.Router();

const hash = (password, salt) => crypto.scryptSync(password, salt, 32).toString('hex');

// POST /api/auth/login - credentials are verified at the backend
router.post('/login', validateLogin, (req, res) => {
  const { email, password } = req.body;
  const user = users.findByEmail(email);
  if (!user || user.passwordHash !== hash(password, user.salt)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = crypto.randomBytes(24).toString('hex');
  res.json({ message: 'Login successful', token, redirect: '/dashboard',
             user: { id: user.id, name: user.name } });
});

module.exports = router;

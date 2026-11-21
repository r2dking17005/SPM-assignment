const express = require('express');
const router = express.Router();

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.status(501).json({ message: 'Login not implemented yet' });
});

module.exports = router;

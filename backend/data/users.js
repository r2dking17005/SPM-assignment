const crypto = require('crypto');
const salt = 'demo-salt';
const users = [{
  id: 1, name: 'Demo Student', email: 'student@example.com', salt,
  passwordHash: crypto.scryptSync('secret123', salt, 32).toString('hex'),
}];
module.exports = { findByEmail: (email) => users.find((u) => u.email === email) };

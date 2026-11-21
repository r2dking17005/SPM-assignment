// Validates the login request body before credentials are checked
module.exports = function validateLogin(req, res, next) {
  const { email, password } = req.body || {};
  const emailOk = typeof email === 'string' && /^\S+@\S+\.\S+$/.test(email);
  if (!emailOk) return res.status(400).json({ message: 'A valid email is required' });
  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }
  next();
};

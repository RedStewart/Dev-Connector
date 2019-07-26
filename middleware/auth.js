const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Create variable for jwtSecret key
  const jwtSecret = process.env.jwtSecret || config.get('jwtSecret');

  // Get the token from the header
  const token = req.header('x-auth-token');

  // Check if token exists
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  // Verify token
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

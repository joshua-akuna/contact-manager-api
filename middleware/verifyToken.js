const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    const accessToken = authHeader.split(' ')[1];

    if (!accessToken) {
      res.status(401);
      throw new Error('Invalid token');
    }

    jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error('Token is not valid.');
      }
      req.user = decoded.user;
    });
  } else {
    res.status(401);
    throw new Error('Access token not found.');
  }
  next();
};

module.exports = verifyToken;

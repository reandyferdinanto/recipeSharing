const jwt = require("jsonwebtoken");

const config = process.env;

exports.verifyToken = (req, res, next) => {
  const token = req.header("authorization");

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token.split(" ")[1], config.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

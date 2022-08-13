const jwt = require("jsonwebtoken");

module.exports.createToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET);
};

module.exports.verification = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return false;
  }
};

const bcrypt = require("bcrypt");

module.exports.generateHash = (passord) => {
  return bcrypt.hashSync(passord, bcrypt.genSaltSync(10));
};

module.exports.compareHash = (passord, hash) => {
  return bcrypt.compareSync(passord, hash);
};

const { verification } = require("../modules/jwt");

module.exports = async function AdminMiddleware(req, res, next) {
  try {
    let token = req.cookies.token;
    console.log(req.cookies.token);
    if (!token) {
      res.render("admin/Login", {
        ok: false,
        message: "Token not found",
      });
      console.log(2);
      return;
    }
    token = verification(token);

    if (!token) {
      res.render("admin/Login", {
        ok: false,
        message: "Token not valid",
      });
      return;
    }

    next();
  } catch (error) {
    console.log("adminMid err: " + error);
    next();
  }
};

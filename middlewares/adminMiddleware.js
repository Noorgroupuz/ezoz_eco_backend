const { verification } = require("../modules/jwt");

module.exports = async function AdminMiddleware(req, res, next) {
  try {
    let token = req.cookies.token;
    if (!token) {
      res.render("admin/Login", {
        ok: false,
        message: "Token not found",
      });
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

    let admin = await req.db.admins.findOne({
      where: {
        admin_id: token.admin_id,
      },
    });
    if (!admin) {
      res.render("admin/Login", {
        ok: false,
        message: "Admin not found",
      });
      return;
    }

    next();
  } catch (error) {
    console.log("adminMid err: " + error);
    next();
  }
};

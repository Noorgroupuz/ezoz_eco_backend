const { generateHash, compareHash } = require("../modules/bcrypt");
const { createToken } = require("../modules/jwt");

const AdminController = {
  register: async (req, res, next) => {
    try {
      const { admin_email, admin_password } = req.body;
      const hashPass = generateHash(admin_password);
      const admin = await req.db.admins.findOne({
        where: {   
          admin_email,
        },
      }); 
      if (admin) {
        res.render("admin/Register", {
          ok: false,
          message: "Admin already exist with this email",
        });
      }

      const newAdmin = await req.db.admins.create({
        admin_email,
        admin_password: hashPass,
      });

      const token = createToken({
        newAdmin_id: newAdmin.dataValues.admin_id,
      });
      if (!token) {
        res.render("admin/Register", {
          ok: false,
          message: "Token generate error",
        });
      }

      res.cookie("token", token, {
        maxAge: 900000,
        httpOnly: true,
      });
      res.redirect("/admin/login");
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { admin_email, admin_password } = req.body;
      const admin = await req.db.admins.findOne({
        where: {
          admin_email,
        },
      });
      if (!admin) {
        res.render("admin/Login", {
          ok: false,
          message: "Admin doesn't exist",
          title: "Nmadur",
        });
        return;
      }

      const isMatch = compareHash(admin_password, admin.admin_password);
      if (!isMatch) {
        res.render("admin/Login", {
          ok: false,
          message: "Password is incorrect",
        });
        return;
      }

      const token = createToken({
        admin_id: admin.dataValues.admin_id,
      });
      if (!token) {
        res.render("admin/Login", {
          ok: false,
          message: "Token generate error",
        });
        return;
      }

      res.cookie("token", token, {
        maxAge: 900000,
        httpOnly: true,
      });
      console.log(1);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
module.exports = AdminController;

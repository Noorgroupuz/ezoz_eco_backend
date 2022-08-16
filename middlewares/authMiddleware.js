function AdminMiddleware(req, res, next) {
  if (!req.admin) {
    res.redirect("/admin/login");
  } else {
    next();
  }
}

module.exports = { AdminMiddleware };

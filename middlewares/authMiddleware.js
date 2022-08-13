function AdminMiddleware(req, res, next) {
  console.log(req.admin);
  if (!req.admin) {
    res.redirect("/admin/login");
  } else {
    next();
  }
}

module.exports = { AdminMiddleware };

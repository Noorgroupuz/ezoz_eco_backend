const errorHandler = require("../helpers/errorHandler");
const adminMiddleware = require("../middlewares/adminMiddleware");
const AdminRoute = require("./AdminRoute");
const HomeRoute = require("./HomeRoute");

module.exports = async function (app) {
  try {
    app.use("/", HomeRoute);
    app.use("/admin", AdminRoute);

    app.use((req, res) => {
      res.render("404", {});
    });
  } finally {
    app.use(errorHandler);
  }
};

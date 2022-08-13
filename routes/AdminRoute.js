const AdminController = require("../controllers/AdminController");
const AdminIndustryController = require("../controllers/AdminIndustryController");
const AdminProductController = require("../controllers/AdminProductController");
const AdminServiceController = require("../controllers/AdminServiceController");
const upload = require("../controllers/upload");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("admin/AdminDashboard");
});

// Productes
router
  .route("/productes")
  .get(AdminProductController.getProductes)
  .post(upload.fileStore, AdminProductController.createProduct);

router
  .route("/product/:id")
  .get(AdminProductController.getEditProduct)
  .put(upload.fileStore, AdminProductController.editProduct)
  .delete(AdminProductController.deleteProduct);

router.route("/createProduct").get((req, res) => {
  res.render("admin/CreateProduct");
});

// Industries
router
  .route("/industries")
  .get(AdminIndustryController.getIndustries)
  .post(upload.fileStore, AdminIndustryController.createIndustry);

router
  .route("/industry/:id")
  .get(AdminIndustryController.getEditIndustry)
  .put(upload.fileStore, AdminIndustryController.editIndustry)
  .delete(AdminIndustryController.deleteIndustry);

router.route("/createIndustry").get((req, res) => {
  res.render("admin/CreateIndustry");
});


// Services
router
  .route("/services")
  .get(AdminServiceController.getServices)
  .post(upload.service, AdminServiceController.createService);

router
  .route("/service/:id")
  .get(AdminServiceController.getEditService)
  .put(upload.service, AdminServiceController.editService)
  .delete(AdminServiceController.deleteService);

router.route("/createService").get((req, res) => {
  res.render("admin/CreateService");
});

router
  .route("/login")
  .post(AdminController.login)
  .get((req, res) => {
    res.render("admin/Login", {});
  });

router.post("/register", AdminController.register);
router.get("/register", (req, res) => {
  res.render("admin/Register", {});
});
router;

module.exports = router;

const AdminApplicationController = require("../controllers/AdminApplicationController");
const AdminController = require("../controllers/AdminController");
const AdminIndustryController = require("../controllers/AdminIndustryController");
const AdminProductController = require("../controllers/AdminProductController");
const AdminServiceController = require("../controllers/AdminServiceController");
const upload = require("../controllers/upload");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = require("express").Router();

router.get("/", adminMiddleware, (req, res, next) => {
  res.render("admin/AdminDashboard");
});

// Productes
router.route("/productes").get(adminMiddleware, AdminProductController.getProductes).post(adminMiddleware, upload.fileStore, AdminProductController.createProduct);

router.route("/product/:id").get(AdminProductController.getEditProduct).put(adminMiddleware, upload.fileStore, AdminProductController.editProduct).delete(adminMiddleware, AdminProductController.deleteProduct);

router.route("/createProduct").get(adminMiddleware, (req, res) => {
  res.render("admin/CreateProduct");
});

// Industries
router.route("/industries").get(adminMiddleware, AdminIndustryController.getIndustries).post(adminMiddleware, upload.fileStore, AdminIndustryController.createIndustry);

router.route("/industry/:id").get(adminMiddleware, AdminIndustryController.getEditIndustry).put(adminMiddleware, upload.fileStore, AdminIndustryController.editIndustry).delete(adminMiddleware, AdminIndustryController.deleteIndustry);

router.route("/createIndustry").get(adminMiddleware, (req, res) => {
  res.render("admin/CreateIndustry");
});

// Services
router.route("/services").get(adminMiddleware, AdminServiceController.getServices).post(adminMiddleware, upload.service, AdminServiceController.createService);

router.route("/service/:id").get(adminMiddleware, AdminServiceController.getEditService).put(adminMiddleware, upload.service, AdminServiceController.editService).delete(adminMiddleware, AdminServiceController.deleteService);

router.route("/createService").get(adminMiddleware, (req, res) => {
  res.render("admin/CreateService");
});

// Application
router.route("/applications").get(adminMiddleware, AdminApplicationController.getApplications).post(AdminApplicationController.createApplication);
// router
//   .route("/application/:id")
//   .delete(adminMiddleware, AdminApplicationController.deleteApplication);

// Login
router
  .route("/login")
  .post(AdminController.login)
  .get((req, res) => {
    res.render("admin/Login", {});
  });

// Register
router.post("/register", AdminController.register);
router.get("/register", (req, res) => {
  res.render("admin/Register", {});
});
router.get("/logout", AdminController.logout);

module.exports = router;

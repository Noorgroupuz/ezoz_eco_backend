const adminMiddleware = require("../middlewares/adminMiddleware");
const path = require("path");
const PagesController = require("../controllers/PagesController");

const router = require("express").Router();

// router.get("/", (req, res) => {

// });
router.get("/", PagesController.homePage);
router.get("/services", PagesController.services);
router.get("/industries", PagesController.industries);
router.get("/productes", PagesController.productes);
router.get("/about", PagesController.about);
router.get("/tashkent", PagesController.tashkent);
router.get("/uzbekistan", PagesController.uzbekistan);
router.get("/service/:id", PagesController.service);

// Get image
// router.get("/api/upload/image/:id", async (req, res) => {
//   try {
//     res.sendFile(path.join(__dirname, `../upload/image/${req.params.id}`));
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// });

module.exports = router;

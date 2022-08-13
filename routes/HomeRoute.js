const adminMiddleware = require("../middlewares/adminMiddleware");
const path = require("path");

const router = require("express").Router();

// router.get("/", (req, res) => {

// });

// Get image
router.get("/api/upload/image/:id", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, `../upload/image/${req.params.id}`));
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

module.exports = router;

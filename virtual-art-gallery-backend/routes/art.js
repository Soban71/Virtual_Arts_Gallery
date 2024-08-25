const express = require("express");
const {
  uploadArt,
  getArtworks,
  getArtworksByArtistId,
} = require("../controllers/artController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/upload", protect, uploadArt);
router.get("/artworks", getArtworks);
// In artRoutes.js
router.get("/artist/:id/artworks", getArtworksByArtistId);

//artist/${id}/artworks

module.exports = router;

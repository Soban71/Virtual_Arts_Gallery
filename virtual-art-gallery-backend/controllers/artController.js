const Art = require("../models/Art");
const multer = require("multer");
const path = require("path");

// Multer config
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Images only!", false);
    }
  },
});

exports.uploadArt = [
  upload.single("image"),
  async (req, res) => {
    const { title, description } = req.body;
    try {
      const art = await Art.create({
        title,
        description,
        imageUrl: req.file.path,
        artist: req.user._id,
      });
      res.status(201).json(art);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
];

exports.getArtworks = async (req, res) => {
  try {
    const artworks = await Art.find().populate("artist", "name");
    res.status(200).json(artworks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// In artController.js

exports.getArtworksByArtistId = async (req, res) => {
  try {
    const artistId = req.params.id;
    const artworks = await Art.find({ artist: artistId }); // Fetch artworks by artist ID
    if (!artworks.length) {
      return res
        .status(404)
        .json({ message: "No artworks found for this artist cccc" });
    }
    res.status(200).json(artworks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

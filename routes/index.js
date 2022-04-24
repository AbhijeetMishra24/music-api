const express = require("express");
const router = express.Router();
const multer = require("multer");
const { memoryStorage } = require("multer");
const {
  createMusic,
  getAllMusic,
  getMusic,
  deleteMusic
} = require("../controllers/music-controller");

const storage = memoryStorage();
const upload = multer({ storage });
// const upload = multer({ dest: 'uploads/' })

router.post("/api/addmusic", upload.single("mp3file"), createMusic);
router.get("/api/allmusic", getAllMusic);
router.get("/api/music/:id", getMusic);


module.exports = router;

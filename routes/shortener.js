const express = require("express");
const jwt = require("jsonwebtoken");
const URL = require("../models/url");
const router = express.Router();

const { JWT_SECRET } = process.env;

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Unauthorized" });
  }
};

// Shorten URL
router.post("/shorten", authenticate, async (req, res) => {
  const { originalUrl } = req.body;
  try {
    const shortUrl = Math.random().toString(36).substring(2, 8);
    const newUrl = new URL({ originalUrl, shortUrl, userId: req.user.id });
    await newUrl.save();
    res.status(201).json({ shortUrl });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Redirect to Original URL
router.get("/:shortUrl", async (req, res) => {
  try {
    const url = await URL.findOne({ shortUrl: req.params.shortUrl });
    if (!url) return res.status(404).json({ message: "URL not found" });

    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

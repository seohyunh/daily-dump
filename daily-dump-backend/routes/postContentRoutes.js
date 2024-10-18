const express = require("express");
const {
  addPostContent,
  fetchContentByPostId,
} = require("../controllers/postContentController");
const router = express.Router();

router.post("/", addPostContent);

router.get("/:post_id", fetchContentByPostId);

module.exports = router;

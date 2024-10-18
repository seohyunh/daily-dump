const express = require("express");
const {
  addPosts,
  fetchPostById,
  fetchAllPosts,
  fetchPostAndContent,
} = require("../controllers/postController");
const router = express.Router();

router.post("/", addPosts);

router.get("/all", fetchAllPosts);

router.get("/:id", fetchPostById);

router.get("/:id/full", fetchPostAndContent);

module.exports = router;

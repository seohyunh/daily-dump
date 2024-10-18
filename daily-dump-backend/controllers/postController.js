const {
  createPost,
  getAllPosts,
  getPostById,
  getPostAndContent,
} = require("../models/posts");

const addPosts = async (req, res) => {
  try {
    const dateTime = new Date();
    const post = { ...req.body, created_at: dateTime };
    const newPost = await createPost(post);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchAllPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(201).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchPostById = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    if (!post) {
      res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchPostAndContent = async (req, res) => {
  try {
    const posts = await getPostAndContent(req.params.id);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addPosts,
  fetchAllPosts,
  fetchPostById,
  fetchPostAndContent,
};

const {
  createPostContent,
  getContentByPostId,
} = require("../models/postContent");

const addPostContent = async (req, res) => {
  const { post_id, blocks } = req.body;

  try {
    const contentRes = [];
    for (const [index, block] of blocks.entries()) {
      const content = {
        post_id: post_id,
        content_type: block.type,
        content: block.content,
        order_num: index + 1,
      };

      const result = await createPostContent(content);
      contentRes.push(result);
    }
    res.status(201).json(contentRes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchContentByPostId = async (req, res) => {
  try {
    const content = await getContentByPostId(req.params.post_id);
    if (!content) {
      return res
        .status(400)
        .json({ error: "No content for this post can be found" });
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addPostContent, fetchContentByPostId };

const pool = require("../services/db");

const createPostContent = async (postContent) => {
  const query = `
    INSERT INTO post_content (post_id, content_type, content, order_num)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
  const values = [
    postContent.post_id,
    postContent.content_type,
    postContent.content,
    postContent.order_num,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getContentByPostId = async (post_id) => {
  const query =
    "SELECT * FROM post_content WHERE post_id = $1 ORDER BY order_num";
  const values = [post_id];
  const result = await pool.query(query, values);
  return result.rows;
};

module.exports = { createPostContent, getContentByPostId };

const pool = require("../services/db");

const createPost = async (post) => {
  const query = `
    INSERT INTO posts (title, cover_photo, short_description, created_at)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
  const values = [
    post.title,
    post.cover_photo,
    post.short_description,
    post.created_at,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAllPosts = async () => {
  const query = "SELECT * FROM posts";
  const result = await pool.query(query);
  return result.rows;
};

const getPostById = async (id) => {
  const query = "SELECT * FROM posts where id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getPostAndContent = async (id) => {
  const query = `
  SELECT p.*, pc.content_type, pc.content, pc.order_num 
  FROM posts p 
  LEFT JOIN post_content pc ON p.id = pc.post_id 
  WHERE p.id = $1 
  ORDER BY pc.order_num`;
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows;
};

module.exports = { createPost, getAllPosts, getPostById, getPostAndContent };

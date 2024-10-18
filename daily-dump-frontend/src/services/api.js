import axios from "axios";
// import { BACKEND_URL } from "@env";

const apiUrl = "http://localhost:5001";

// function to create post
export const createPost = async (postData) => {
  try {
    console.log("api url", apiUrl);
    const response = await axios.post(`${apiUrl}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post", error.response.data);
    throw error;
  }
};

export const addPostContent = async (postContentData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/post-content`,
      postContentData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding post content", error.response.data);
    throw error;
  }
};

export const getPost = async (postId) => {
  try {
    const response = await axios.get(`${apiUrl}/posts/${postId}/full`, postId);
    return response.data;
  } catch (error) {
    console.error("Error getting post content", error.response.data);
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/posts/all`);
    return response.data;
  } catch (error) {
    console.error("Error getting all posts", error.response.data);
    throw error;
  }
};

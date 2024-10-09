import axios from 'axios';

const API_BASE_URL = 'https://blogapp-backend-node-week02.onrender.com';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    await axios.post(`${API_BASE_URL}/api/posts`, { ...postData, user_id: 1 });
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

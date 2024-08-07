import axios from 'axios';
const API_URL = 'http://localhost:3000/cart'; // Replace with your API URL

export const getCart = async (user) => {
  if (!user) {
    throw new Error('No user is logged in');
  }
  
  const response = await axios.get(``,{'firebaseUid':user}); // Ensure the endpoint is correct
  if (!response.ok) {
    throw new Error('Failed to fetch cart data');
  }
  
  return response.json();
};

export const addToCart = async (userId, productId, quantity) => {
  const response = await axios.post(`${API_URL}/add`, { id: userId, productId, quantity });
  return response.data;
};

export const removeFromCart = async (userId, productId) => {
  const response = await axios.delete(`${API_URL}/remove/${productId}`, { data: { id: userId } });
  return response.data;
};

export const clearCart = async (userId) => {
  await axios.delete(`${API_URL}/clear`, { data: { id: userId } });
};

import axios from 'axios';
const API_URL = 'http://localhost:3000'; // Replace with your API URL

export const getCart = async (firebaseUid) => {
  if (!firebaseUid) {
    throw new Error('No user is logged in');
  }

  try {
    const response = await axios.post('http://localhost:3000/cart', { firebaseUid });
    return response.data; // Return the parsed data directly
  } catch (error) {
    console.error('Error fetching cart data:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export const addToCart = async (userId, productId, quantity) => {
  const response = await axios.post(`${API_URL}/add`, { id: userId, productId, quantity });
  return response.data;
};

export const removeFromCart1 = async (userId, productId) => {
  console.log(userId, productId);
  const response = await axios.delete(`${API_URL}/cart/remove/${productId}`, { data: { id: userId } });
  return response.data;
};

export const clearCart = async (userId) => {
  await axios.delete(`${API_URL}/clear`, { data: { id: userId } });
};

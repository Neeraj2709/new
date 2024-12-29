import axios from 'axios';

const API_URL = 'http://yourapiurl.com';

const fetchUser = async () => {
  const response = await axios.get(`${API_URL}/user`);
  return response.data;
};

const updateUser = async (userData) => {
  const response = await axios.put(`${API_URL}/user`, userData);
  return response.data;
};

export { fetchUser, updateUser };

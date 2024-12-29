import axios from 'axios';

const API_URL = 'http://yourapiurl.com';

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  return response.data;
};

// Other auth related services

export { login, signup };

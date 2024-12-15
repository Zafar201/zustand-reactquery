import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api/v1'
});


// Add token to requests if it exists
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export const registerUser = async (userData) => {
  const response = await API.post('/register', userData);
  return response.data;
};


export const loginUser = async (credentials) => {
    const response = await API.post('/login', credentials);
    return response.data;
  };



export const fetchUsers = async () => {
    const response = await API.get('/admin/users');
    return response.data;
  };
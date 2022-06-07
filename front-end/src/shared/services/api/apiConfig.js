import axios from 'axios';

const PORT = process.env.REACT_APP_HOST_API || 'http://localhost:3001';

const api = axios.create({
  baseURL: PORT,
});

export default api;

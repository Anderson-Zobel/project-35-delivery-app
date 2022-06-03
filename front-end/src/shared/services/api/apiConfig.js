import axios from 'axios';

export default apiConfig = () => axios.create({
  baseURL: 'http://localhost:3009',
});

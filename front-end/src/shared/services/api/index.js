import axios from 'axios';

const PORT = process.env.REACT_APP_HOST_API || 'http://localhost:3001';

console.log(PORT);

const api = axios.create({
  baseURL: PORT,
});

const getUser = async ({ email, password }) => {
  try {
    const { data } = await api.post('/login', { email, password });
    console.log(data);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export default getUser;

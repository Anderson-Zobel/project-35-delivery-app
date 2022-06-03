import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3009',
});

const getUser = async ({ email, password }) => {
  try {
    const { data } = await api.post('/login', { email, password });
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export default getUser;

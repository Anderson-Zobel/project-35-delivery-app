import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3009',
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

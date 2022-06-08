import apiConfig from './apiConfig';

export const requestLogin = async ({ email, password }) => {
  try {
    const { data } = await apiConfig.post('/login', { email, password });
    console.log(data);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export const requestRegister = async ({ name, email, password, role = 'costumer' }) => {
  try {
    const { data } = await apiConfig.post('/register', { name, email, password, role });
    console.log(data);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export const getProducts = async () => {
  try {
    const { data } = await apiConfig.get('/products');
    console.log(data);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export default { requestLogin, requestRegister, getProducts };

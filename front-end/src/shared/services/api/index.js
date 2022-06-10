import apiConfig from './apiConfig';

export const requestLogin = async ({ email, password }) => {
  try {
    const { data } = await apiConfig.post('/login', { email, password });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const requestRegister = async ({ name, email, password, role = 'costumer' }) => {
  try {
    const { data } = await apiConfig.post('/register', { name, email, password, role });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const { data } = await apiConfig.get('/products');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default { requestLogin, requestRegister, getProducts };

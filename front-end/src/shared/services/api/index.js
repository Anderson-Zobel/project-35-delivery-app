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

export const getSellers = async () => {
  try {
    const { data } = await apiConfig.get('/seller');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (body, userToken) => {
  try {
    const header = {
      headers: { authorization: userToken },
    };

    const { data } = await apiConfig.post('/order', body, header);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderById = async (id) => {
  try {
    const { data } = await apiConfig.get(`order/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const setOrderStatusById = async (id) => {
  try {
    const { data } = await apiConfig.put(`order/${id}`, {
      status: 'entregue',
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  requestLogin,
  requestRegister,
  getProducts,
  getOrderById,
  createOrder,
  setOrderStatusById,
};

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

export default { requestLogin };

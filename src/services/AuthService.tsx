import axios from 'axios';
import { UserToken } from '../utils/types';

const baseUrl = 'http://localhost:8080/api/v1/auth';

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserToken>(baseUrl + '/signin', {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerAPI = async (
  name: string | null,
  username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserToken>(baseUrl + '/sigup', {
      name: name,
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

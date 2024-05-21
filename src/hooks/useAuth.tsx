import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/AuthService';
import React from 'react';
import axios from 'axios';

type UserContextType = {
  token: string | null;
  register: (name: string, username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      axios.defaults.headers.common['Authorization'] = 'Bearer' + token;
    }
    setIsReady(true);
  }, []);

  const register = async (
    name: string | null,
    username: string,
    password: string
  ) => {
    await registerAPI(name, username, password)
      .then(() => {
        navigate('/login');
      })
      .catch((e) => console.log(e));
  };

  const login = async (username: string, password: string) => {
    await loginAPI(username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res?.data.token);
          setToken(res?.data.token);
          navigate('/films');
        }
      })
      .catch((e) => console.log(e));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ login, logout, token, register }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);

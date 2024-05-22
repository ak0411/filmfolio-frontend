import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/AuthService';
import React from 'react';
import axios from 'axios';
import { UserProfile } from '../utils/types';

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  register: (name: string | null, username: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
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
          const userObj = {
            name: res?.data.name,
            username: res?.data.username,
          };
          localStorage.setItem('user', JSON.stringify(userObj));
          setToken(res?.data.token);
          setUser(userObj!);
          navigate('/films');
        }
      })
      .catch((e) => console.log(e));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken('');
    navigate('/films');
  };

  return (
    <UserContext.Provider
      value={{ login, user, token, logout, isLoggedIn, register }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);

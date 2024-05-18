import axios from 'axios';
import { FilmResponse } from '../utils/types';

const baseUrl = 'http://localhost:8080/api/v1/films';

export const getFilms = () =>
  axios.get<FilmResponse>(baseUrl).then((res) => res.data);

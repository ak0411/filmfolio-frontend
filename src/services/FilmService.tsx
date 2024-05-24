import axios from 'axios';
import { Film, FilmsPage } from '../utils/types';

const baseUrl = 'http://localhost:8080/api/v1/films';

export const getFilms = () =>
  axios.get<FilmsPage>(baseUrl).then((res) => res.data);

export const getFilmByImdbId = (id: string | undefined) =>
  axios.get<Film>(baseUrl + `/${id}`).then((res) => res.data);

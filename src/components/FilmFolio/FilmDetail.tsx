import { Film } from '../../utils/types';
import Application from '../Application';

interface Props {
  film: Film;
}

const FilmDetail = ({ film }: Props) => {
  return <Application name={film.title}>{film.overview}</Application>;
};

export default FilmDetail;

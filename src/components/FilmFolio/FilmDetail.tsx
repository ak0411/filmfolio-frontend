import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFilmByImdbId } from '../../services/FilmService';

const FilmDetail = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['film', id],
    queryFn: () => getFilmByImdbId(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading film details</div>;
  }

  const film = data;

  return (
    <div>
      <p>Title: {film.title}</p>
      <p>Release date: {film.release_date}</p>
      <p>Genres: {film.genres}</p>
      <p>Overview: {film.overview}</p>
      <p>Number of favorites: {film.favorites}</p>
      <ul>
        {film.reviews.map((review) => (
          <li>
            {review.text} {review.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmDetail;

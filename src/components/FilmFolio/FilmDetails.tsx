import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFilmByImdbId } from '../../services/FilmService';
import { FilmsContainer } from './Films';
import styled from 'styled-components';
import { Button, Frame } from 'react95';
import heart from '../../assets/heart.png';

const baseImgPath = 'https://image.tmdb.org/t/p/w300';

const Header = styled.div`
  display: flex;
  gap: 1em;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;

const GenreContainer = styled.div`
  display: flex;
  gap: 0.25em;
`;

const GenreCard = styled(Frame)`
  padding: 0.25em;
  font-size: 1em;
`;

const CommentsContainer = styled(Frame)`
  padding: 1em 1.25em;
  border-radius: 5px;
`;

const FilmDetails = () => {
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
    <FilmsContainer>
      <Header>
        <img src={baseImgPath + film.poster_path} />
        <Details>
          <div>
            <p className='bold' style={{ fontSize: '1.5em' }}>
              {film.title}
            </p>
            <p style={{ fontSize: '1em' }}>{film.release_date}</p>
          </div>
          <GenreContainer>
            {film.genres.map((genre) => (
              <GenreCard variant='well'>{genre}</GenreCard>
            ))}
          </GenreContainer>
          <p>{film.overview}</p>
          <div className='f fac' style={{ gap: '0.5em', marginTop: 'auto' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              {film.favorites}
            </span>
            <img src={heart} style={{ height: '32px' }} />
            <Button>+</Button>
            <Button>-</Button>
          </div>
        </Details>
      </Header>
      <h1 style={{ fontSize: '2em' }}>Comments:</h1>
      <CommentsContainer variant='well'>
        <ul>
          {film.reviews.map((review) => (
            <li>
              {review.text} {review.rating}
            </li>
          ))}
        </ul>
      </CommentsContainer>
    </FilmsContainer>
  );
};

export default FilmDetails;

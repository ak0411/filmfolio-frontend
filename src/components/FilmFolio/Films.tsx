import { Frame, Hourglass } from 'react95';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getFilms } from '../../services/FilmService';
import { useNavigate } from 'react-router-dom';

const baseImgPath = 'https://image.tmdb.org/t/p/w200';

const FilmsContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1em;
`;

const FilmsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 1em;
`;

const FilmCard = styled(Frame)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const stylePoster: React.CSSProperties = {
  width: '100%',
  aspectRatio: '1 / 1.5',
  objectFit: 'cover',
  imageRendering: 'pixelated',
};

const StyledInput = styled.input`
  width: 100%;
  max-width: 25em;
  font-size: 1.25em;
  padding: 0.25em;
  margin: 0 auto;
`;

const Searchbar = styled.div`
  display: flex;
`;

const Films = () => {
  const navigate = useNavigate();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
  });

  const films = data?.content ?? [];

  return (
    <FilmsContainer>
      <Searchbar>
        <StyledInput placeholder='Search...' />
      </Searchbar>
      {isPending ? (
        <div className='f fg fjc fac'>
          <Hourglass size={128} />
        </div>
      ) : isError ? (
        <div className='f fg fjc fac'>
          Could not fetch films: {error.message}
        </div>
      ) : (
        <FilmsGrid>
          {films.map((film) => (
            <FilmCard
              key={film.imdb_id}
              variant='well'
              onClick={() => navigate(`${film.imdb_id}`)}
            >
              <img style={stylePoster} src={baseImgPath + film.poster_path} />
              <h1
                className='f fac fjc bold'
                style={{
                  fontSize: '1.25em',
                  padding: '1em',
                }}
              >
                {film.title}
              </h1>
            </FilmCard>
          ))}
        </FilmsGrid>
      )}
    </FilmsContainer>
  );
};

export default Films;

import { Frame, Hourglass, TextInput } from 'react95';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getFilms } from '../../services/films';

const baseImgPath = 'https://image.tmdb.org/t/p/w200';

const FilmsContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1em;
  padding: 1em;
`;

const FilmsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  gap: 1em;
`;

const styleFilmCard: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const styleGenreWrapper: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5em',
};

const stylePoster: React.CSSProperties = {
  width: '100%',
  aspectRatio: '1 / 1.5',
  objectFit: 'cover',
  imageRendering: 'pixelated',
};

const styleSearchBar: React.CSSProperties = {
  margin: '0 25em',
};

const Films: React.FC = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['films'],
    queryFn: getFilms,
  });

  const films = data?.content ?? [];

  return (
    <FilmsContainer>
      <TextInput variant='flat' placeholder='Search' style={styleSearchBar} />
      {isPending ? (
        <div className='f fg fjc fac'>
          <Hourglass size={128} />
        </div>
      ) : isError ? (
        <span className='f fg fjc fac'>{error.message}</span>
      ) : (
        <FilmsGrid>
          {films.map((film) => (
            <Frame style={styleFilmCard} key={film.imdb_id} variant='well'>
              <img style={stylePoster} src={baseImgPath + film.poster_path} />
              <div style={{ margin: '0 0.5em 1em 0.5em' }}>
                <h1
                  className='bold'
                  style={{ textAlign: 'center', fontSize: '1.5em' }}
                >
                  {film.title}
                </h1>
                <div style={styleGenreWrapper}>
                  {film.genres.map((genre, index) => (
                    <Frame
                      key={index}
                      variant='well'
                      style={{ fontSize: '1.5em', padding: '0.25em' }}
                    >
                      {genre}
                    </Frame>
                  ))}
                </div>
              </div>
            </Frame>
          ))}
        </FilmsGrid>
      )}
    </FilmsContainer>
  );
};

export default Films;

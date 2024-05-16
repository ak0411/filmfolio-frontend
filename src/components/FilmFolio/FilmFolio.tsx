import { FC } from 'react';
import { Button, Frame, TextInput } from 'react95';
import styled from 'styled-components';
import { filmData } from '../../global/testData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  gap: 1em;
`;

const FilmsContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilmsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 1em;
`;

const styleFilmCard: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  height: 'auto',
};

const styleGenreWrapper: React.CSSProperties = {
  display: 'flex',
  gap: '0.5em',
  overflowX: 'auto',
};

const stylePoster: React.CSSProperties = {
  imageRendering: 'pixelated',
};

const styleSearchBar: React.CSSProperties = {
  width: '25em',
  margin: '0 auto',
};

const FilmFolio: FC = () => {
  return (
    <Wrapper>
      <div className='f'>
        <Button className='fg'>Films</Button>
        <Button className='fg'>Users</Button>
        <Button className='fg'>Login</Button>
        <Button className='fg'>Sign up</Button>
      </div>
      <FilmsContainer>
        <TextInput style={styleSearchBar} placeholder='Search' />
        <FilmsGrid>
          {filmData.map((film) => (
            <Frame style={styleFilmCard} key={film.imdb} variant='well'>
              <img style={stylePoster} src={film.poster} />
              <div className='f fc fac'>
                <h1 className='bold'>{film.title}</h1>
                <span>{film.year}</span>
              </div>
              <div style={styleGenreWrapper}>
                {film.genre.map((genre, index) => (
                  <Frame key={index} variant='well'>
                    {genre}
                  </Frame>
                ))}
              </div>
            </Frame>
          ))}
        </FilmsGrid>
      </FilmsContainer>
    </Wrapper>
  );
};

export default FilmFolio;

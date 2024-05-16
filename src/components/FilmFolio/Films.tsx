import { FC } from 'react';
import { Frame, TextInput } from 'react95';
import { filmData } from '../../global/testData';
import styled from 'styled-components';

const FilmsContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: red;
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

const Films: FC = () => {
  return (
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
  );
};

export default Films;

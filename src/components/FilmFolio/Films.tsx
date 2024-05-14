import { CSSProperties, FC } from 'react';
import { Frame, ScrollView, TextInput } from 'react95';
import { filmData } from '../../global/testData';
import styled from 'styled-components';

const FilmsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
  grid-gap: 5px;
  overflow-y: auto;
`;

const styleFilmCard: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  height: '550px',
};

const styleGenreWrapper: CSSProperties = {
  display: 'flex',
  gap: '5px',
  overflowX: 'auto',
};

const stylePoster: CSSProperties = {
  imageRendering: 'pixelated',
};

const styleSearchBar: CSSProperties = {
  width: '25em',
  margin: '0 auto',
};

const Films: FC = () => {
  return (
    <div className='f fc' style={{ gap: 20, border: 'dotted 2px red' }}>
      <TextInput style={styleSearchBar} placeholder='Search' />
      <ScrollView style={{ border: 'solid 2px blue' }}>
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
      </ScrollView>
    </div>
  );
};

export default Films;

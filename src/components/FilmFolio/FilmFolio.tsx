import { FC } from 'react';
import { Button } from 'react95';
import styled from 'styled-components';
import Films from './Films';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  gap: 1em;
`;

const styleButton: React.CSSProperties = {
  flexGrow: 1,
  fontSize: '1.5em',
};

const FilmFolio: FC = () => {
  return (
    <Wrapper>
      <div className='f' style={{ gap: '1em' }}>
        <Button style={styleButton}>Films</Button>
        <Button style={styleButton}>Users</Button>
        <Button style={styleButton}>Login</Button>
        <Button style={styleButton}>Sign up</Button>
      </div>
      <Films />
    </Wrapper>
  );
};

export default FilmFolio;

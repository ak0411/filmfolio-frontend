import { useState } from 'react';
import { Button } from 'react95';
import styled from 'styled-components';
import Films from './Films';
import Login from './Login';
import Signup from './Signup';

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

enum Tab {
  Films,
  Login,
  Signup,
}

const FilmFolio = () => {
  const [tab, setTab] = useState<Tab>(Tab.Films);

  return (
    <Wrapper>
      <div className='f' style={{ gap: '1em' }}>
        <Button style={styleButton} onClick={() => setTab(Tab.Films)}>
          Films
        </Button>
        <Button style={styleButton} onClick={() => setTab(Tab.Login)}>
          Login
        </Button>
        <Button style={styleButton} onClick={() => setTab(Tab.Signup)}>
          Sign up
        </Button>
      </div>
      {tab === Tab.Films && <Films />}
      {tab === Tab.Login && <Login />}
      {tab === Tab.Signup && <Signup />}
    </Wrapper>
  );
};

export default FilmFolio;

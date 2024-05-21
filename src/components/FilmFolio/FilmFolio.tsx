import styled from 'styled-components';
import Films from './Films';
import Login from './Login';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';
import Loading from '../Loading';
import Menu from '../Menu';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  gap: 1em;
`;

const FilmFolio = () => {
  return (
    <Wrapper>
      <Menu />
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/films' element={<Films />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Wrapper>
  );
};

export default FilmFolio;

import styled from 'styled-components';
import Application from './Application';
import FilmFolio from './FilmFolio';
import Taskbar from './Taskbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: calc(100vh * 4 / 3);
  background: ${({ theme }) => theme.desktopBackground};
  margin: 0 auto;
`;

const Desktop = () => {
  return (
    <Container>
      <Application name='filmfolio.exe'>
        <FilmFolio />
      </Application>
      <Taskbar />
    </Container>
  );
};

export default Desktop;

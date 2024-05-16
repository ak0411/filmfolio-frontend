import styled, { ThemeProvider } from 'styled-components';
import theme from 'react95/dist/themes/blackAndWhite';
import GlobalStyles from './components/GlobalStyles';
import Taskbar from './components/Taskbar';
import Application from './components/Application';
import FilmFolio from './components/FilmFolio';

const Desktop = styled.div`
  height: 100vh;
  width: calc(100vh * 4 / 3);
  background: ${({ theme }) => theme.desktopBackground};
  margin: 0 auto;
`;

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Desktop className='f fc'>
          <Application name='filmfolio.exe'>
            <FilmFolio />
          </Application>
          <Taskbar />
        </Desktop>
      </ThemeProvider>
    </div>
  );
};

export default App;

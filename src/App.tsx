import styled, { ThemeProvider } from 'styled-components';
import theme from 'react95/dist/themes/blackAndWhite';
import GlobalStyles from './components/GlobalStyles';
import Taskbar from './components/Taskbar';
import Application from './components/Application';
import FilmFolio from './components/FilmFolio';
import filmfolioLogo from './assets/filmfolio-logo.png';

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: calc(100vh * 4 / 3);
  background: ${({ theme }) => theme.desktopBackground};
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Desktop>
          <Application name='filmfolio.exe' logo={filmfolioLogo}>
            <FilmFolio />
          </Application>
          <Taskbar />
        </Desktop>
      </ThemeProvider>
    </>
  );
};

export default App;

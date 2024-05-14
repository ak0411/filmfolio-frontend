import styled, { ThemeProvider } from 'styled-components';
import theme from 'react95/dist/themes/blackAndWhite';
import GlobalStyles from './components/GlobalStyles';
import Taskbar from './components/Taskbar';
import Application from './components/Application';
import FilmFolio from './components/FilmFolio';

const DesktopWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 100vh;
`;

const Desktop = styled.div`
  width: calc(100vh * 4 / 3);
  background: ${({ theme }) => theme.desktopBackground};
`;

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <DesktopWrapper>
          <Desktop className='f fc'>
            <Application name='filmfolio.exe'>
              <FilmFolio />
            </Application>
            <Taskbar />
          </Desktop>
        </DesktopWrapper>
      </ThemeProvider>
    </div>
  );
};

export default App;

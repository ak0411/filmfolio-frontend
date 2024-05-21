import { ThemeProvider } from 'styled-components';
import theme from 'react95/dist/themes/blackAndWhite';
import GlobalStyles from './components/GlobalStyles';

import Desktop from './components/Desktop';
import { UserProvider } from './hooks/useAuth';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Desktop />
        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

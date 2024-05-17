import { styleReset } from 'react95';
import { createGlobalStyle } from 'styled-components';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  body {
    background-color: black;
  }
  .f {
    display: flex;
  }
  .fg {
    flex-grow: 1;
  }
  .wr {
    flex-wrap: 'wrap'
  }
  .fc {
    flex-direction: column;
  }
  .fac {
    align-items: center;
  }
  .fjc {
    justify-content: center;
  }
  .fjb {
    justify-content: space-between;
  }
  .fullw {
    width: 100%;
  }
  .fullh {
    height: 100%;
  }
  .rel {
    position: relative;
  }
  .abs {
    position: absolute;
  }
  .nm {
    margin: 0;
  }
  .np {
    padding: 0;
  }
  .bold {
    font-weight: bold;
  }
  img, picture {
    max-width: 100%;
    display: block;
  }

`;

export default GlobalStyles;

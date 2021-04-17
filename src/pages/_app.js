import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ModernNormalize from 'theme/ModernNormalize';
import theme from 'theme/globalTheme';
import Meta from 'components/Meta';
import { ContextAppWrapper } from 'context/state';

const GlobalStyle = createGlobalStyle`
  ${ModernNormalize}

  *, *::before, *::after {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

  html {
  // * Happy rems-> 1 rem === 10px
  font-size: 62.5%;

  }

  @font-face {
        font-family: 'Courgette';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Courgette'), url('/fonts/Courgette-Regular.ttf') format('truetype');
  }
  @font-face {
        font-family: 'EmblemaOne';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('EmblemaOne'), url('/fonts/EmblemaOne-Regular.ttf') format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Courgette',-apple-system, BlinkMacSystemFont, 'Segoe UI',  'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
  }

`;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <GlobalStyle />
      <ThemeProvider theme={theme.light}>
        <ContextAppWrapper>
          <Component {...pageProps} />
        </ContextAppWrapper>
      </ThemeProvider>
    </>
  );
}

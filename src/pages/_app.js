import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ModernNormalize from 'theme/ModernNormalize';
import theme from 'theme/globalTheme';

const GlobalStyle = createGlobalStyle`
  ${ModernNormalize}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

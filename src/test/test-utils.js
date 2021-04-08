import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../theme/globalTheme';

function TestWrapper({ children }) {
  return <ThemeProvider theme={theme.light}>{children}</ThemeProvider>;
}

const customRender = (ui, options) =>
  render(ui, {
    wrapper: TestWrapper,
    ...options,
  });

TestWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export * from '@testing-library/react';
export { customRender as render };

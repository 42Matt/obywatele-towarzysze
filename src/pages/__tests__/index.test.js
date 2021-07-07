// import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test/test-utils';
import Home from '../index';
// import * as stateMock from '../../context/state';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   render(<Home />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// jest.mock('context/state', () => ({
//   useAppContext: jest.fn(() => {}),
// }));
// afterEach(() => jest.resetAllMocks());

describe('Home component', () => {
  it('shows proper title', () => {
    render(<Home />);
    expect(screen.getByText('Obywatele, Towarzysze!')).toBeInTheDocument();
  });
  it('shows starts button after players num is chosen', () => {
    render(<Home />);
    // expect(stateMock.useAppContext).toHaveBeenCalledTimes(1);
    // expect(screen.getByRole('button')).not.toBeVisible();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();

    expect(screen.getByLabelText(/4/)).toBeInTheDocument();

    // users choose 2 players, btn shows
    userEvent.click(screen.getByLabelText(/2/));
    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByAltText('start button')).toBeVisible();
  });
});

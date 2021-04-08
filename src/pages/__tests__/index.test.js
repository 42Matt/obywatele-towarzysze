import ReactDOM from 'react-dom';
import { render } from '../../test/test-utils';
import Home from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

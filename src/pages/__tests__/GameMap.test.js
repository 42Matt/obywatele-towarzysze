import { render, screen } from '../../test/test-utils';
import GameMap from '../../components/molecules/GameMap';

describe('map', () => {
  it('renders all fields', () => {
    render(<GameMap />);

    expect(screen.getAllByTestId('village').length).toBe(12);
    expect(screen.getAllByTestId('river').length).toBe(4);
    expect(screen.getAllByTestId('bridge').length).toBe(1);
    expect(screen.getAllByTestId('city').length).toBe(12);
  });
});

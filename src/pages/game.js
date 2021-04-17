import GameMap from 'components/molecules/GameMap';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  direction: columns;
  justify-content: center;
`;

const Game = () => (
  <Wrapper>
    <GameMap />
  </Wrapper>
);

export default Game;

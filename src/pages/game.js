import styled from 'styled-components';
import GameMap from '@/components/molecules/GameMap';

const Wrapper = styled.div`
  display: flex;
  direction: columns;
  justify-content: center;
`;

const Game = () => (
  <>
    <Wrapper>
      <GameMap />
    </Wrapper>
    {/* <GameInterface /> */}
  </>
);
export default Game;

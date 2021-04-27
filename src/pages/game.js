import styled from 'styled-components';
import GameMap from '@/components/molecules/GameMap';
import GameInterface from '@/components/molecules/GameInterface';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(/brickwall.png);
  height: 100vh;
`;

const MapWrapper = styled.div`
  display: flex;
  /* direction: row; */
  justify-content: center;
`;

const Game = () => (
  <GameContainer>
    <MapWrapper>
      <GameMap />
    </MapWrapper>
    <GameInterface />
  </GameContainer>
);
export default Game;

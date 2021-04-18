import GameMap from 'components/molecules/GameMap';
import styled from 'styled-components';
import { Player, Item } from 'utils/PlayerBuilder';
import PlayerBuilderComponent from 'components/organism/PlayerBuilderComponent';

const Wrapper = styled.div`
  display: flex;
  direction: columns;
  justify-content: center;
`;

const Game = () => {
  console.log(Player);
  console.log(Item);

  return (
    <>
      <Wrapper>
        <GameMap />
      </Wrapper>
      <PlayerBuilderComponent />
    </>
  );
};

export default Game;

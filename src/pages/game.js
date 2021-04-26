import styled from 'styled-components';
import { useEffect } from 'react';
import { useAppContext } from '@/context/state';
import GameMap from '@/components/molecules/GameMap';
import { Player } from '@/utils/PlayerBuilder';

const Wrapper = styled.div`
  display: flex;
  direction: columns;
  justify-content: center;
`;

const Game = () => {
  const { state, dispatch } = useAppContext();

  const playerOne = new Player('Gracz 1', 120);
  const playerTwo = new Player('Gracz 2', 120);
  const playerThree = new Player('Gracz 3', 120);
  const playerFour = new Player('Gracz 4', 120);

  const dispatchPlayers = () => {
    switch (state.number) {
      case 2:
        return dispatch({ type: 'initPlayers', payload: { playerOne, playerTwo } });
      case 3:
        return dispatch({ type: 'initPlayers', payload: { playerOne, playerTwo, playerThree } });
      case 4:
        return dispatch({
          type: 'initPlayers',
          payload: { playerOne, playerTwo, playerThree, playerFour },
        });
      default:
        throw new Error('Dispatch players num invalid');
    }
  };

  useEffect(() => {
    dispatchPlayers();
  }, []);

  return (
    <>
      <Wrapper>
        <GameMap />
      </Wrapper>
      {/* <GameInterface /> */}
    </>
  );
};
export default Game;

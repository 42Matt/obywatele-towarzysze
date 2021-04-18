import GameMap from 'components/molecules/GameMap';
import styled from 'styled-components';
import { Player } from 'utils/PlayerBuilder';
import PlayerBuilderComponent from 'components/organism/PlayerBuilderComponent';
import { useAppContext } from 'context/state';

const Wrapper = styled.div`
  display: flex;
  direction: columns;
  justify-content: center;
`;

const Game = () => {
  // console.log(Player);
  // console.log(Item);

  const { state, dispatch } = useAppContext();
  console.log(state);

   const generatePlayers = (state.number) => {
    const newUser = new Player('testPlayer', 120);
    const newUser = new Player('testPlayer', 120);
    const newUser = new Player('testPlayer', 120);
   }

  const setPlayers = () => {



    switch (state.number) {
      case '2':
        return dispatch({type: generateTwo, payload: });
      case '3':
        return 
      case '4':
        return 
      default:
        throw new Error();
    }

    
  };

  return (
    <>
      <Wrapper>
        {setPlayers()}
        <GameMap />
      </Wrapper>
      <PlayerBuilderComponent />
    </>
  );
};

export default Game;

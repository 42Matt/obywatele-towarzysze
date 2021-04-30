import styled from 'styled-components';
import { useAppContext } from '@/context/state';
import { rollDice, getFixedPosition } from '@/utils/gameplay';
import Button from '@/components/atoms/Button';
import Paragraph from '@/components/atoms/Paragraph';

const Wrapper = styled.div`
  margin-top: 4rem;

  display: flex;
  direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

const Column = styled.div`
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameInterface = () => {
  const { state, dispatch } = useAppContext();

  const handlePlayerMovement = (player) => {
    const startPosition = state[player].position;

    const endPosition = getFixedPosition(startPosition, rollDice(1, 6));

    dispatch({
      type: 'movePlayer',
      payload: { player, endPosition },
    });
  };

  const handlePlayerDamage = (player, dmg) => {
    const hp = state[player].hp - dmg;
    if (hp <= 0) {
      dispatch({
        type: 'killedPlayer',
        payload: { player },
      });
    }

    dispatch({
      type: 'loseHP',
      payload: { player, hp },
    });
  };

  return (
    <Wrapper>
      <Column>
        <Paragraph>
          HP: {state.playerOne.hp} Dead: {state.playerOne.dead === false ? 'no' : 'yes'}
        </Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerOne')}>
          Move PlayerOne
        </Button>
        <Button secondary type="button" onClick={() => handlePlayerDamage('playerOne', 10)}>
          Hit PlayerOne by 10
        </Button>
      </Column>

      <Column>
        <Paragraph>HP: {state.playerTwo.hp}</Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerTwo')}>
          Move PlayerTwo
        </Button>
      </Column>

      <Column>
        <Paragraph>HP: {state?.playerThree?.hp}</Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerThree')}>
          Move PlayerTwo
        </Button>
      </Column>

      <Column>
        <Paragraph>HP: {state?.playerFour?.hp}</Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerFour')}>
          Move PlayerTwo
        </Button>
      </Column>
    </Wrapper>
  );
};

export default GameInterface;

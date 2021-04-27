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

  return (
    <Wrapper>
      <Column>
        <Paragraph>PlayerOne</Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerOne')}>
          Move PlayerOne
        </Button>
      </Column>
      <Column>
        <Paragraph>Player Two</Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerTwo')}>
          Move PlayerTwo
        </Button>
      </Column>
      <Column>
        <Paragraph>Player Three</Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerThree')}>
          Move PlayerTwo
        </Button>
      </Column>
      <Column>
        <Paragraph>Player Four</Paragraph>
        <Button type="button" onClick={() => handlePlayerMovement('playerFour')}>
          Move PlayerTwo
        </Button>
      </Column>
    </Wrapper>
  );
};

export default GameInterface;

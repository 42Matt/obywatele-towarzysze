import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '@/context/state';
import { villageData, cityData, riverData } from '@/components/molecules/GameMap/mapData';
import { rollDice, getFixedPosition } from '@/utils/gameplay';

// import { useReducer } from 'react';

const Variables = {
  size: '16rem',
  playerHeight: '10rem',
  playerWidth: '6rem',
};

const StyledGrid = styled.div`
  /* grid-gap: 2px; */
  grid-gap: 1px;
  display: grid;
  max-width: auto;
  height: auto;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  > div {
    /* background-color: red; */
  }
`;

const MapField = styled.div`
  height: ${Variables.size};
  width: ${Variables.size};
  /* temps */
  font-size: 2rem;
`;

const MiddleFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const River = styled.div`
  position: absolute;
  height: ${Variables.size};
  width: ${Variables.size};
  background-image: url('/river.svg');
`;

const Bridge = styled.div`
  position: absolute;

  height: ${Variables.size};
  width: ${Variables.size};
  background-image: url('/bridge.svg');
`;

const PlayerOne = styled.div`
  position: relative;
  bottom: ${Variables.playerHeight};
  left: 9rem;
  height: ${Variables.playerHeight};
  width: ${Variables.playerWidth};
  background-image: url('/players/player-one.svg');
  object-fit: contain;
  z-index: 1000;
`;

export const GameMap = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    console.log({ state });
  }, [state]);

  const handlePlayerMovement = (player) => {
    const startPosition = state[player].position;

    const endPosition = getFixedPosition(startPosition, rollDice(1, 6));

    dispatch({
      type: 'movePlayer',
      payload: { player, endPosition },
    });
  };

  return (
    <>
      <StyledGrid>
        {villageData.map((item) => (
          <MapField key={item.id} id={item.id}>
            {/* Pozycja:{item.position}| Id:{item.id} */}
            <img
              data-testid="village"
              src={`/village/field-${item.id}.svg`}
              alt={`Village field ${item.id}`}
            />
            {/* {item.position === state.playerOne.position ? <PlayerOne /> : null} */}
            {/* {item.position === 1 ? <PlayerOne /> : null} */}
          </MapField>
        ))}
      </StyledGrid>

      <MiddleFields>
        {riverData.map((item) => (
          <MapField key={item.id} id={item.id}>
            {/* Pozycja:{item.position}| Id:{item.id} */}
            <River data-testid="river" />
            {item.id === 3 ? <Bridge data-testid="bridge" /> : null}
          </MapField>
        ))}
      </MiddleFields>

      <StyledGrid>
        {cityData.map((item) => (
          <MapField key={item.id} id={item.id}>
            {/* Pozycja:{item.position}| Id:{item.id} */}
          </MapField>
        ))}
      </StyledGrid>
      <button type="button" onClick={() => handlePlayerMovement('playerOne')}>
        Move PlayerOne
      </button>
    </>
  );
};

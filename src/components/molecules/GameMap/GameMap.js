import styled from 'styled-components';
import { useAppContext } from 'context/state';
import { villageData, cityData, riverData } from 'components/molecules/GameMap/mapData';
// import { useReducer } from 'react';

const Variables = {
  size: '16rem',
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
  /* border: 2px solid black; */
  font-size: 2rem;
`;

const MiddleFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Sea = styled.div`
  position: absolute;
  height: ${Variables.size};
  width: ${Variables.size};
  background-image: url('/sea.svg');
`;

const Bridge = styled.div`
  position: absolute;

  height: ${Variables.size};
  width: ${Variables.size};
  background-image: url('/bridge.svg');
`;

export const GameMap = () => {
  const { state } = useAppContext();
  console.log(`Game map state: ${state.players}`);

  return (
    <>
      <StyledGrid>
        {villageData.map((item) => (
          <MapField key={item.id} id={item.id}>
            {/* Pozycja:{item.position}| Id:{item.id} */}
            <img src={`/village/field-${item.id}.svg`} alt={`Village field ${item.id}`} />
            {/* {item.position === state.player.position ? } */}
          </MapField>
        ))}
      </StyledGrid>

      <MiddleFields>
        {riverData.map((item) => (
          <MapField key={item.id} id={item.id}>
            {/* Pozycja:{item.position}| Id:{item.id} */}
            <Sea />
            {item.id === 3 ? <Bridge /> : null}
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
    </>
  );
};

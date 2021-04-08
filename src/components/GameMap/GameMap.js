import styled from 'styled-components';
import { villageData, cityData, riverData } from './mapData';
import { useAppContext } from '../../context/state';

const Wrapper = styled.div`
  display: flex;
  direction: columns;
  justify-content: center;
`;

const StyledGrid = styled.div`
  /* grid-gap: 2px; */
  grid-gap: 1px;
  display: grid;
  max-width: auto;
  height: auto;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  > div {
    background-color: red;
  }
`;

const MapField = styled.div`
  height: 11rem;
  width: 11rem;
  /* temps */
  border: 2px solid black;
  font-size: 2rem;
`;

const MiddleFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GameMap = () => {
  const { state } = useAppContext();
  console.log(state);

  return (
    <Wrapper>
      <StyledGrid>
        {villageData.map((item) => (
          <MapField key={item.id} id={item.id}>
            Pozycja:{item.position}| Id:{item.id}
          </MapField>
        ))}
      </StyledGrid>

      <MiddleFields>
        {riverData.map((item) => (
          <MapField key={item.id} id={item.id}>
            Pozycja:{item.position}| Id:{item.id}
          </MapField>
        ))}
      </MiddleFields>

      <StyledGrid>
        {cityData.map((item) => (
          <MapField key={item.id} id={item.id}>
            Pozycja:{item.position}| Id:{item.id}
          </MapField>
        ))}
      </StyledGrid>
    </Wrapper>
  );
};

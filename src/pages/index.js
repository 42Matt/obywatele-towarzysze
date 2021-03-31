import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border: 10px solid #fff;
  border-radius: 20px;
  box-shadow: 2px 2px #333;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.textNormal};
  text-shadow: 1px 1px #fff;
`;

const Subtitle = styled.h2`
  font-size: 1, 2rem;
  color: ${({ theme }) => theme.colors.textNormal};
  text-shadow: 1px 1px #333;
`;
const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.textWhite};
  text-shadow: 1px 1px #333;
`;

const NumberContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.accentBackground};
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 1px 4px #333;
  input {
    display: none;
  }
  label {
    padding: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const NumberScreen = styled.div`
  margin-top: 2.5rem;
  font-size: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textWhite};
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textNormal};
  }
`;

const StartButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.accentBackground};
  color: ${({ theme }) => theme.colors.textNormal};
  border: none;
  border-radius: 1rem;
  box-shadow: 2px 2px 1px 4px #333;

  visibility: ${({ pikcedNumber }) => (pikcedNumber ? 'visible' : 'hidden')};
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
  &:focus {
    outline: none;
  }
`;

const Home = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [pikcedNumber, setpikcedNumber] = useState(false);

  const handlePickingNumberOfPlayers = (e) => {
    setNumberOfPlayers(e.target.value);
    setpikcedNumber(true);
  };

  return (
    <Wrapper>
      <StartMenuContainer>
        <Title>Obywatele, Towarzysze!</Title>
        <Subtitle>Zapraszamy do gry!</Subtitle>
        <Paragraph>Wybierz liczbę graczy:</Paragraph>
        <NumberContainer>
          <label htmlFor="1">
            <input
              type="radio"
              value={1}
              name="numberOfPlayers"
              id="1"
              onChange={handlePickingNumberOfPlayers}
            />
            1
          </label>
          <label htmlFor="2">
            <input
              type="radio"
              value={2}
              name="numberOfPlayers"
              id="2"
              onChange={handlePickingNumberOfPlayers}
            />
            2
          </label>
          <label htmlFor="3">
            <input
              type="radio"
              value={3}
              name="numberOfPlayers"
              id="3"
              onChange={handlePickingNumberOfPlayers}
            />
            3
          </label>
          <label htmlFor="4">
            <input
              type="radio"
              value={4}
              name="numberOfPlayers"
              id="4"
              onChange={handlePickingNumberOfPlayers}
            />
            4
          </label>
        </NumberContainer>
        <NumberScreen>
          Liczba graczy: <span>{numberOfPlayers}</span>
        </NumberScreen>
        <StartButton pikcedNumber={pikcedNumber}>Start</StartButton>
      </StartMenuContainer>
    </Wrapper>
  );
};

export default Home;

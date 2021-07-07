import { useState } from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { useAppContext } from '@/context/state';
import Title from '@/components/atoms/Title';
import Subtitle from '@/components/atoms/Subtitle';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/brickwall.png);

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primaryBackground};

    mix-blend-mode: color;
  }
`;

const MenuContainer = styled.div`
  z-index: 1000;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 5rem 2rem;
  height: 70rem;
  background-image: url(/menu-choice.jpeg);
  background-color: ${({ theme }) => theme.colors.accent};
  border-right: 10px solid ${({ theme }) => theme.colors.darkRed};
  border-bottom: 10px solid ${({ theme }) => theme.colors.darkRed};
  border-radius: 20px;
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.11);
`;

const StyledTitle = styled(Title)`
  margin: 0 0 3rem;
`;

const StyledSubtitle = styled(Subtitle)`
  margin: 0 0 20rem;
`;

const StyledParagraph = styled.p`
  margin: 0 0 2.5rem;
  /* font-family: ${({ theme }) => theme.fonts.title}; */
  color: ${({ theme }) => theme.colors.red};
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: ${({ theme }) => theme.sizes.xl};
  text-shadow: 1px 1px #333;
`;

const NumberContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.accent}; */
  /* background: ${({ theme }) => theme.gradients.secondaryGradient}; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 7px solid ${({ theme }) => theme.colors.darkRed};
  /* border-right: 5px solid #d40000; */
  /* border-radius: 1rem; */
  input {
    display: none;
  }
  label {
    padding: 1rem;
    font-size: ${({ theme }) => theme.sizes.xxl};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.opacityWhite};
    }
  }
`;
const ChosenNumber = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 700;
`;

const StartButton = styled.button`
  position: absolute;
  /* transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')}; */
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  /* opacity: ${({ active }) => (active ? '100%' : '0')}; */
  bottom: 22rem;
  right: 22rem;

  height: 0;
  width: 0;
  padding: 0;

  /* height: 10rem;
  width: 10rem;
  padding: 10rem; */
  border: 0;
  cursor: pointer;

  background-color: none;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  & img {
    width: 20rem;
    height: 20rem;
  }
`;

const Home = () => {
  const { dispatch } = useAppContext();
  const [players, setPlayers] = useState(0);
  const [isVisible, setVisibility] = useState(false);

  const handlePickingNumberOfPlayers = (e) => {
    setPlayers(+e.target.value);
    setVisibility(true);
  };

  const options = [2, 3, 4];

  return (
    <Wrapper>
      <MenuContainer>
        <StyledTitle>Obywatele, Towarzysze!</StyledTitle>
        <StyledSubtitle>Zapraszamy do gry!</StyledSubtitle>

        <StyledParagraph>Wybierz liczbę graczy:</StyledParagraph>

        <NumberContainer>
          {options.map((element) => (
            <label key={element} htmlFor={element}>
              <input
                type="radio"
                value={element}
                name="numberOfPlayers"
                id={element}
                onChange={handlePickingNumberOfPlayers}
              />
              {+element === players ? <ChosenNumber>{element}</ChosenNumber> : element}
            </label>
          ))}
        </NumberContainer>

        {/* <StartButton role="button" active={isVisible} onClick={() => dispatch({ type: players })}> */}
        <StartButton
          role="button"
          active={isVisible}
          onClick={() => dispatch({ type: 'init', payload: players })}
        >
          <Link href="/game">
            <img src="/stamp.svg" alt="start button" />
          </Link>
        </StartButton>
      </MenuContainer>
    </Wrapper>
  );
};

export default Home;

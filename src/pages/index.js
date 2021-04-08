import { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Link from 'next/link';
import { useAppContext } from '../context/state';
// import pic from 'assets/pic.jpeg';

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
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 5rem 2rem;
  height: 70rem;
  background-image: url(/menu-choice.jpeg);
  background-color: ${({ theme }) => theme.colors.accent};
  border: 10px solid #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.11);
`;

const Title = styled.h1`
  margin: 0 0 3rem;
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.colors.textNormal};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.sizes.xxl};
  text-align: center;
  /* text-shadow: 1px 1px #fff; */
`;

const Subtitle = styled.h2`
  margin: 0 0 20rem;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.sizes.xl};
  color: ${({ theme }) => theme.colors.textNormal};
  text-shadow: 1px 1px #333;
`;
const Paragraph = styled.p`
  margin: 0 0 2.5rem;
  /* font-family: ${({ theme }) => theme.fonts.title}; */
  color: ${({ theme }) => theme.colors.textWhite};
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: ${({ theme }) => theme.sizes.xl};
  text-shadow: 2px 2px #333;
`;

const NumberContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.gradients.secondaryGradient};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #fff;
  border-radius: 1rem;
  input {
    display: none;
  }
  label {
    padding: 1rem;
    font-size: ${({ theme }) => theme.sizes.xl};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryBackground};
    }
  }
`;
const ChosenNumber = styled.span`
  color: white;
  font-weight: 700;
`;

const StyledButton = styled(Button)`
  margin-top: 4rem;
  /* visibility: ${({ active }) => (active ? 'visible' : 'hidden')}; */
  filter: ${({ active }) => (active ? 'opacity(1)' : 'opacity(0)')};
`;

const Home = () => {
  const { state, dispatch } = useAppContext();
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [isButtonVisible, setButtonVisibility] = useState(false);

  const handlePickingNumberOfPlayers = (e) => {
    dispatch({ type: e.target.value });
    setNumberOfPlayers(e.target.value);
    setButtonVisibility(true);
  };

  const options = [2, 3, 4];

  return (
    <Wrapper>
      <MenuContainer>
        <Title>Obywatele, Towarzysze!</Title>
        <Subtitle>Zapraszamy do gry!</Subtitle>

        <Paragraph>
          Wybierz liczbę graczy:
          {/* <span>{state.players && state.players}</span> */}
        </Paragraph>

        <NumberContainer>
          {options.map((element) => (
            <label key={element} htmlFor={element}>
              <input
                type="radio"
                value={+element}
                name="numberOfPlayers"
                id={element}
                onChange={handlePickingNumberOfPlayers}
              />
              {+element === +numberOfPlayers ? <ChosenNumber>{element}</ChosenNumber> : element}
            </label>
          ))}
        </NumberContainer>

        <StyledButton secondary active={isButtonVisible}>
          <Link href="/game">
            <span>Start</span>
          </Link>
        </StyledButton>
      </MenuContainer>
    </Wrapper>
  );
};

export default Home;

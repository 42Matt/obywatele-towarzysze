import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.gradients.primaryGradient};
  color: ${({ theme }) => theme.colors.textWhite};

  line-height: 22px;
  width: 174px;
  height: 56px;
  border: 0;
  border-radius: 1.8rem;
  /* box-shadow: 1px 1px black; */
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.11);
  & > span {
    font-size: ${({ theme }) => theme.sizes.l};
    text-shadow: ${({ theme }) => theme.shadows.text};
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textWhite};
    transform: scale(1.05);
  }
  &:focus {
    outline: ${({ theme }) => theme.colors.textWhite} solid 1px;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.gradients.secondaryGradient};
      border: 4px solid white;
    `}
`;

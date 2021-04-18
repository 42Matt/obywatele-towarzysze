import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  font-size: 1.4rem;
  ${(props) =>
    props.mid &&
    css`
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.darkRed};
    `}
`;

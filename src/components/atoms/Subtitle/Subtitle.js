import styled from 'styled-components';

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.sizes.xl};
  color: ${({ theme }) => theme.colors.textNormal};
  text-shadow: 1px 1px #333;
`;

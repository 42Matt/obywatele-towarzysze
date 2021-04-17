import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textNormal};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.sizes.xxl};
  text-align: center;
  /* text-shadow: 1px 1px #fff; */
`;

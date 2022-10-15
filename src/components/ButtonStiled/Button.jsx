import styled from '@emotion/styled';

const Button = styled.button`
  padding: 6px 16px;
  border-radius: ${p => p.theme.space[5]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-weight: 500;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export default Button;

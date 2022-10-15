import styled from '@emotion/styled';

export const ListItemWrap = styled.li`
  display: flex;
  justify-content: end;
  gap: 15%;
  align-items: center;
  width: 300px;
  background-color: #90a9c6;
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${props => props.theme.space[2]}px;
`;

export const List = styled.ul`
  padding-left: ${p => p.theme.space[1]}px;
`;

// import styled from 'styled-components';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 6px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 450;
  :first-of-type {
    margin-right: 2px;
  }

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.primary};

    :hover {
      background-color: ${p => p.theme.colors.secondary};
    }
  }
`;

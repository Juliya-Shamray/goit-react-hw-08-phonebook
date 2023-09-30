import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledHeader = styled.header`
  background-color: #444c5c;
  padding: 15px;
  font-size: 18px;
  nav {
    display: flex;
    justify-content: space-between;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 10px;
    align-items: center;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #c4dfe6;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 250ms linear;
  &.active {
    color: white;
  }
  &:hover {
    color: white;
  }
`;

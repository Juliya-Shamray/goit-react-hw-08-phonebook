import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledHeader = styled.header`
  background-color: #444c5c;
  padding: 15px 0;
  font-size: 18px;
  nav {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }

  ul {
    display: flex;
    list-style: none;
    gap: 10px;
    align-items: center;
  }
  li {
    &:nth-child(3) {
      justify-content: flex-end;
    }
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

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerMenuWrapper = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;
    ul {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 0;
    }
  }
`;

export const Menu = styled.div`
  /* display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')}; */
  position: absolute;
  top: 0;
  right: 0;
  background-color: #333;
  width: 100%;
  height: 100vh;
  padding: 20px;
  z-index: 1;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};

  transition: transform 250ms linear;
`;

export const MenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: block;
  font-size: 18px;
`;

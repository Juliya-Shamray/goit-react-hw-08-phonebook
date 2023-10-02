import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50px;
  div {
    width: 50%;
  }
  h1 {
    margin-bottom: 50px;
    max-width: 400px;
    line-height: 1.5;
  }
  p {
    line-height: 1.5;
    font-size: 18px;
    text-indent: 35px;
    margin-bottom: 50px;
  }
`;
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 5px 15px;
  background-color: #c1f1e4;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover {
    background-color: #444c5c;
    color: white;
  }
`;

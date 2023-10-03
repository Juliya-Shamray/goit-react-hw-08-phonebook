import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  & > div {
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 1158px) {
    display: flex;
    gap: 50px;
    margin-top: 50px;
    div {
      width: 50%;
    }
  }
  h1 {
    margin-bottom: 15px;
    font-size: 24px;
    @media screen and (min-width: 768px) {
      margin-bottom: 25px;
      font-size: 28px;
    }
    @media screen and (min-width: 1158px) {
      margin-bottom: 50px;
      max-width: 400px;
      line-height: 1.5;
    }
  }

  p {
    line-height: 1.5;
    font-size: 18px;
    text-indent: 35px;
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      margin-bottom: 35px;
    }
    @media screen and (min-width: 1158px) {
      margin-bottom: 50px;
    }
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

export const StyledImg = styled.img`
  @media screen and (min-width: 320px) and (max-width: 427px) {
    min-width: 300px;
  }
  @media screen and (min-width: 428px) {
    min-width: 400px;
  }

  @media screen and (min-width: 1158px) {
    max-width: 540px;
  }
`;

export const StyledImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;

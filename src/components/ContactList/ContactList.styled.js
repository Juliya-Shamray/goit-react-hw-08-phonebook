import { styled } from 'styled-components';
export const StyledList = styled.ul`
  list-style: none;
`;
export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 7px 1px 4px black;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  gap: 20px;
  padding: 10px;
  justify-content: space-between;
  border: 1px solid black;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: white;
`;
export const StyledBtn = styled.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: #cf5568;
  }
`;
export const StyledText = styled.p`
  font-size: 20px;
`;

export const StyledBtnEdit = styled.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: darkblue;
  }
`;

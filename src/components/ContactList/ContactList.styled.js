import { styled } from 'styled-components';
export const StyledList = styled.ul`
  list-style: none;
`;
export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 7px 1px 4px black;
  width: 500px;
  gap: 20px;
  padding: 10px;
  justify-content: space-between;
  border: 1px solid black;
  margin-bottom: 15px;
  border-radius: 5px;
`;
export const StyledBtn = styled.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background-color: lightseagreen;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
    font-weight: 700;
  }
`;
export const StyledText = styled.p`
  font-size: 20px;
`;

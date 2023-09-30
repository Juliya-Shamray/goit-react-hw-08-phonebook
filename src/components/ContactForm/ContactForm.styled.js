import { styled } from 'styled-components';
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
  background-color: lightgray;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 0 black;
  width: 350px;
`;
export const StyledLabel = styled.label`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 5px;
`;
export const StyledBtn = styled.button`
  width: max-content;
  margin-left: auto;
  padding: 5px 10px;
  border: 2px solid #5e815e;
  cursor: pointer;
  background-color: white;
  color: #5e815e;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all 250ms linear;
  font-weight: bold;
  &:hover,
  &:focus {
    background-color: #5e815e;
    color: white;
  }
`;

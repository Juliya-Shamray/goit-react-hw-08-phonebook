import { styled } from 'styled-components';
export const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
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
  padding: 5px 10px;
  border: 2px solid lightpink;
  cursor: pointer;
  background-color: white;
  color: lightpink;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all 250ms linear;
  font-weight: bold;
  &:hover,
  &:focus {
    background-color: lightpink;
    color: white;
  }
`;

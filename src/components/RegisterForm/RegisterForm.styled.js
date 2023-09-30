import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 2px solid grey;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  label {
    font-weight: 700;
    margin-bottom: 8px;
  }
  input {
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 5px 10px;
  }
  button {
    padding: 5px 20px;
    cursor: pointer;
    background-color: lightblue;
    width: max-content;
    border-radius: 5px;
    font-weight: 500;
    margin-bottom: 8px;
    text-transform: uppercase;
    transition: 250ms transform linear;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-content: center;
  & div {
    background-color: white;
    width: 350px;
    border: 2px solid grey;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  }
`;
export const StyledForm = styled.form`
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

export const StyledButton = styled.span`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
`;

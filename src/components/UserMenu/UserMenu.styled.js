import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  p {
    color: #c4dfe6;
  }
  button {
    text-transform: uppercase;
    border-radius: 5px;
    padding: 5px 15px;
    background-color: #c1f1e4;
    transition: box-shadow 250ms linear;
    &:hover {
      box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.3) inset;
    }
  }
`;

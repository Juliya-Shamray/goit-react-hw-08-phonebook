import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { selectName } from 'redux/auth/selectors';
import { StyledWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  return (
    <StyledWrapper>
      <p>{name}</p>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </StyledWrapper>
  );
};

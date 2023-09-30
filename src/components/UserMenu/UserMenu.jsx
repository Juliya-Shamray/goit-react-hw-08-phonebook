import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { selectEmail } from 'redux/auth/selectors';
import { StyledWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const email = useSelector(selectEmail);
  return (
    <StyledWrapper>
      <p>{email}</p>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </StyledWrapper>
  );
};

import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { StyledMain } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <div className="container">
          <Outlet />
        </div>
      </StyledMain>
    </>
  );
};

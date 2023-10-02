import { useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';
import { StyledHeader, StyledLink } from './Header.styled';
import { selectIsLogin } from 'redux/auth/selectors';
export const Header = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>

          <li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </li>
        </ul>
        {!isLogin && (
          <ul>
            <li>
              <StyledLink to="/register">Register</StyledLink>
            </li>
            <li>
              <StyledLink to="/login">Login</StyledLink>
            </li>
          </ul>
        )}

        {isLogin && <UserMenu />}
      </nav>
    </StyledHeader>
  );
};

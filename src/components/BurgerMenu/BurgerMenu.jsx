import { useEffect, useState } from 'react';
import { BurgerMenuWrapper, Menu, MenuItem } from './BurgerMenu.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selectors';
import { AlignJustify, X } from 'lucide-react';

export const BurgerMenu = () => {
  const isLogin = useSelector(selectIsLogin);
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const toggleMenu = () => {
    setIsOpenBurger(!isOpenBurger);
  };
  useEffect(() => {
    isOpenBurger
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpenBurger]);

  return (
    <BurgerMenuWrapper>
      <AlignJustify
        className={isOpenBurger ? 'open' : ''}
        onClick={toggleMenu}
      />
      <Menu $isOpen={isOpenBurger}>
        <X onClick={toggleMenu} />
        <nav>
          {isLogin ? (
            <UserMenu />
          ) : (
            <ul>
              <li>
                <MenuItem to="/register" onClick={toggleMenu}>
                  Register
                </MenuItem>
              </li>
              <li>
                <MenuItem to="/login" onClick={toggleMenu}>
                  Login
                </MenuItem>
              </li>
            </ul>
          )}
          <ul>
            <li>
              <MenuItem to="/" onClick={toggleMenu}>
                Home
              </MenuItem>
            </li>

            <li>
              <MenuItem to="/contacts" onClick={toggleMenu}>
                Contacts
              </MenuItem>
            </li>
          </ul>
        </nav>
      </Menu>
    </BurgerMenuWrapper>
  );
};

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/operations';
export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      </nav>
    </header>
  );
};

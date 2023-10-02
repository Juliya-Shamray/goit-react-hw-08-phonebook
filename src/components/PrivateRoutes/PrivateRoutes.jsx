import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';

export const PrivateRoutes = ({ children }) => {
  const isLogin = useSelector(selectIsLogin);
  const location = useLocation();
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

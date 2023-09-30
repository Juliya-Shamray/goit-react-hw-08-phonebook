import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';

export const RegisterPage = () => {
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return <RegisterForm />;
};

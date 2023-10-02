import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { StyledDiv, StyledForm } from './RegisterForm/RegisterForm.styled';
import { toast } from 'react-toastify';
import { selectIsLogin } from 'redux/auth/selectors';
export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}!!!`);
        navigate(location.state?.from ?? '/');
      })
      .catch('Data is not valid');
  };
  if (isLogin) return <Navigate to="/contacts" />;
  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Email:</label>
        <input id="email" {...register('email', { required: true })} />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: true })}
        />
        <button>Log in</button>
        <span>
          You haven't account? Let's <Link to="/register">create it</Link>
        </span>
      </StyledForm>
    </StyledDiv>
  );
};

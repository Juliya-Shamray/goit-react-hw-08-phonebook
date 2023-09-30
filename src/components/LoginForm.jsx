//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepwd12345"
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { StyledDiv, StyledForm } from './RegisterForm/RegisterForm.styled';
export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        console.log(res);
        navigate(location.state?.from ?? '/');
      });
  };
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

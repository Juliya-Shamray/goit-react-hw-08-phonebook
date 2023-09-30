import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';
import { StyledDiv, StyledForm } from './RegisterForm.styled';
export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        console.log(res);
      });
  };
  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name', { required: true })} />
        <label htmlFor="email">Email</label>
        <input id="email" {...register('email', { required: true })} />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: true })}
        />
        <button>Register</button>
        <span>
          You already have account? Let's <Link to="/login">sign in!</Link>
        </span>
      </StyledForm>
    </StyledDiv>
  );
};

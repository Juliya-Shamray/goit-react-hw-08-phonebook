import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';
import { StyledDiv, StyledForm } from './RegisterForm.styled';
import { toast } from 'react-toastify';
export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        toast.success(`Congratulations!!! You have successfully registered`);
        navigate('/contacts');
      })
      .catch(() => toast.error('Data is not valid'));
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

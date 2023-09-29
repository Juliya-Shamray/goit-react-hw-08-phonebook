import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';
export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(registerThunk(data));
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>
        Name:
        <input {...register('name', { required: true })} />
      </label>
      <label>
        Email:
        <input {...register('email', { required: true })} />
      </label>
      <label>
        Password
        <input type="password" {...register('password', { required: true })} />
      </label>
      <button>Submit</button>
      <span>
        You already have account? Let's <Link to="/login">sign in!</Link>
      </span>
    </form>
  );
};

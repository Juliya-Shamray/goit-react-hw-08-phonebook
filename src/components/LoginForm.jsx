//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepwd12345"
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(loginThunk(data));
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
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
        You haven't account? Let's <Link to="/register">create it</Link>
      </span>
    </form>
  );
};

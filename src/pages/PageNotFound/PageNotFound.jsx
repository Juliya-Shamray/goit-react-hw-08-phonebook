import { Link } from 'react-router-dom';
import { StyledWrapper } from './PageNotFound.styled';

export const PageNotFound = () => {
  return (
    <StyledWrapper>
      <h1>Ooops... Page is not found</h1>
      <p>
        You can go to
        <Link className="text-teal-500 underline" to="/">
          Home
        </Link>
        page
      </p>
    </StyledWrapper>
  );
};

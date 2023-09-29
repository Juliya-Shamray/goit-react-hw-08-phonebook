import { StyledInput, StyledText } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <StyledText>Find contacts by name</StyledText>
      <StyledInput
        type="text"
        name="name"
        value={filter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </>
  );
};

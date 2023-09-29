import { useEffect } from 'react';
import {
  StyledBtn,
  StyledLi,
  StyledList,
  StyledText,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
} from 'redux/selectors';
import { deleteContactThunk, getContactsThunk } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = filterContacts();

  return (
    <StyledList>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}
      {filteredData.map(contact => (
        <StyledLi key={contact.id}>
          <StyledText>
            {contact.name}: {contact.phone}
          </StyledText>
          <StyledBtn onClick={() => dispatch(deleteContactThunk(contact.id))}>
            Delete
          </StyledBtn>
        </StyledLi>
      ))}
    </StyledList>
  );
};

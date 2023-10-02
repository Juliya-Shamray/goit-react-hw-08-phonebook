import { useEffect } from 'react';
import {
  StyledBtn,
  StyledBtnEdit,
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
} from 'redux/contacts/selectors';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/operations';
import useModal from 'components/hooks/useModal';
import { Modal } from 'components/Modal/Modal';
import { Pencil, Trash2 } from 'lucide-react';

export const ContactList = () => {
  const { isOpen, close, open, content } = useModal();
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
            {contact.name}: {contact.number}
          </StyledText>
          <div>
            <StyledBtnEdit onClick={() => open(contact)}>
              <Pencil />
            </StyledBtnEdit>
            <StyledBtn onClick={() => dispatch(deleteContactThunk(contact.id))}>
              <Trash2 />
            </StyledBtn>
          </div>
        </StyledLi>
      ))}
      {isOpen && <Modal close={close} contact={content} />}
    </StyledList>
  );
};

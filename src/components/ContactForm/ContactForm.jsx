import { useState } from 'react';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const findByName = contacts.find(contact => contact.name === name);
    if (!findByName) {
      dispatch(addContactThunk({ name, number }));
    } else toast.info(`${findByName.name} is already in contacts`);

    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[A-Za-zА-Яа-я\s'\-]{3,20}"
          title="Name may contain only letters apostrophe, dash and spaces. Min- 3, max- 20 letters"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="[0-9+\s]*"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
        />
      </StyledLabel>
      <StyledBtn>Add contact</StyledBtn>
    </StyledForm>
  );
};

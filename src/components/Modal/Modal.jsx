import { StyledButton, StyledForm, StyledOverlay } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { updateContactThunk } from 'redux/contacts/operations';
import { useState } from 'react';
import { XSquare } from 'lucide-react';

export const Modal = ({ close, contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const id = contact.id;
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    dispatch(updateContactThunk({ id, name, number }));
    close();
  };

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  return (
    <StyledOverlay onClick={handleClick}>
      <div>
        <StyledButton onClick={close}>
          <XSquare />
        </StyledButton>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            pattern="^[A-Za-zА-Яа-я\s'\-]{3,20}"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="number">Number</label>
          <input
            id="number"
            pattern="[0-9+\s]*"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <button>Confirm</button>
        </StyledForm>
      </div>
    </StyledOverlay>
  );
};

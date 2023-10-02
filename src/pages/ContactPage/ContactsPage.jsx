import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { StyledDiv } from './ContactPage.styled';

export const ContactsPage = () => {
  return (
    <StyledDiv>
      <h1>Phone book</h1>
      <div>
        <ContactForm />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <div>
        <ContactList />
      </div>
    </StyledDiv>
  );
};

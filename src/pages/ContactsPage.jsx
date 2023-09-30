import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';

export const ContactsPage = () => {
  const isLogin = useSelector(selectIsLogin);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

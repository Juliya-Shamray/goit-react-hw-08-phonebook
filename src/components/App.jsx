import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};

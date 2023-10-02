import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactPage/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/operations';
import { PrivateRoutes } from './PrivateRoutes/PrivateRoutes';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';

export const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return !isRefresh ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoutes>
              <ContactsPage />
            </PrivateRoutes>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  ) : (
    <h2>Loading...</h2>
  );
};

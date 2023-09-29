import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import { GlobalStyle } from 'styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <ToastContainer position="top-center" autoClose={1000} theme="light" />
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
    <GlobalStyle />

    {/* </React.StrictMode> */}
  </>
);

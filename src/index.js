import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import { GlobalStyle } from 'styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <ToastContainer position="top-center" autoClose={1000} theme="light" />
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />

    {/* </React.StrictMode> */}
  </>
);

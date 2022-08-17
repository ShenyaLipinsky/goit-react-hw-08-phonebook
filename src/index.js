import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/modern-normalize/modern-normalize.css';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import * as dotenv from 'dotenv';
//components
import App from './components/App';
//styles
import './styles.scss';

dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

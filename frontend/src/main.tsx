import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
//components
import App from './components/App';
import { CustomRouter } from './components/utils';
//assets
import { history } from './assets';
//styles
import './styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <CustomRouter history={history}>
      <App />
    </CustomRouter>
  </StrictMode>
);

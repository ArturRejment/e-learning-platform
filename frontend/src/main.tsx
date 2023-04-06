// styles
import './styles.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// assets
import { history } from './assets';
// components
import App from './components/App';
import { CustomRouter } from './components/utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <CustomRouter history={history}>
      <App />
    </CustomRouter>
  </StrictMode>,
);

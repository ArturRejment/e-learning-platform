import './styles.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { history } from './assets';
import App from './components/App';
import { CustomRouter } from './components/utils';
import { store } from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </Provider>
  </StrictMode>,
);

import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { routerPaths } from '../assets';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './home/Home';
import { PrivateRoute } from './utils';

const App = () => {
  return (
    <Routes>
      <Route path={routerPaths.login} element={<Login />} />
      <Route path={routerPaths.register} element={<Register />} />
      <Route
        path={routerPaths.home}
        element={<PrivateRoute component={Home} />}
      />
      <Route path="*" element={<Navigate to={routerPaths.home} replace />} />
    </Routes>
  );
};

export default App;

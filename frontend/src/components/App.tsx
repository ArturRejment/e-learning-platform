import { Routes, Route, Navigate } from 'react-router-dom';
//components
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
//assets
import { routerPaths } from '../assets';
//styles
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path={routerPaths.login} element={<Login />} />
      <Route path={routerPaths.register} element={<Register />} />
      <Route path={routerPaths.home} element={<Home />} />
      <Route path="*" element={<Navigate to={routerPaths.home} replace />} />
    </Routes>
  );
}

export default App;

import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { routerPaths } from '../assets';
import { useAppSelector } from '../hooks';
import { useVerifyTokenQuery } from '../services';
import Login from './auth/Login';
import Register from './auth/Register';
import CourseDetail from './course/CourseDetail';
import Home from './home/Home';
import { PrivateRoute } from './utils';

const App = () => {
  const { accessToken } = useAppSelector(({ auth }) => auth);
  useVerifyTokenQuery({ token: accessToken });

  return (
    <Routes>
      <Route path={routerPaths.login} element={<Login />} />
      <Route path={routerPaths.register} element={<Register />} />
      <Route path={routerPaths.courseDetail} element={<CourseDetail />} />
      <Route
        path={routerPaths.home}
        element={<PrivateRoute component={Home} />}
      />
      <Route path="*" element={<Navigate to={routerPaths.home} replace />} />
    </Routes>
  );
};

export default App;

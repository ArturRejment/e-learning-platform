import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { RouterPath } from '../assets';
import { useAppSelector } from '../hooks';
import { useVerifyTokenQuery } from '../services';
import Login from './auth/Login';
import Register from './auth/Register';
import CourseCodeGeneration from './course/CourseCodeGeneration';
import CourseDetail from './course/CourseDetail';
import JoinCourse from './course/JoinCourse';
import Home from './home/Home';
import { PrivateRoute } from './utils';

const App = () => {
  const { accessToken } = useAppSelector(({ auth }) => auth);
  useVerifyTokenQuery({ token: accessToken });

  return (
    <Routes>
      <Route path={RouterPath.Login} element={<Login />} />
      <Route path={RouterPath.Register} element={<Register />} />
      <Route path={RouterPath.CourseDetail} element={<CourseDetail />} />
      <Route path={RouterPath.JoinCourse} element={<JoinCourse />} />
      <Route
        path={RouterPath.CourseCodesGeneration}
        element={<CourseCodeGeneration />}
      />
      <Route
        path={RouterPath.Home}
        element={<PrivateRoute component={Home} />}
      />
      <Route path="*" element={<Navigate to={RouterPath.Home} replace />} />
    </Routes>
  );
};

export default App;

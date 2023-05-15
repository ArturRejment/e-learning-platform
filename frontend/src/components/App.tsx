import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTER_PATH } from '../assets';
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
      <Route path={ROUTER_PATH.LOGIN} element={<Login />} />
      <Route path={ROUTER_PATH.REGISTER} element={<Register />} />
      <Route path={ROUTER_PATH.COURSE_DETAIL} element={<CourseDetail />} />
      <Route path={ROUTER_PATH.JOIN_COURSE} element={<JoinCourse />} />
      <Route
        path={ROUTER_PATH.COURSE_CODE_GENERATION}
        element={<CourseCodeGeneration />}
      />
      <Route
        path={ROUTER_PATH.HOME}
        element={<PrivateRoute component={Home} />}
      />
      <Route path="*" element={<Navigate to={ROUTER_PATH.HOME} replace />} />
    </Routes>
  );
};

export default App;

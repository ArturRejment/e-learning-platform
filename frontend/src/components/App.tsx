import './App.scss';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { ROUTER_PATH } from '../assets';
import { useAppSelector } from '../hooks';
import { useVerifyTokenQuery } from '../services';
import Login from './auth/Login';
import Register from './auth/Register';
import CodeGeneration from './code-generation/CodeGeneration';
import CourseCodeGeneration from './course/CourseCodeGeneration';
import CourseDetail from './course/CourseDetail';
import JoinCourse from './course/JoinCourse';
import About from './home/About';
import Contact from './home/Contact';
import Home from './home/Home';
import Navbar from './navigation/Navbar';
import { PrivateRoute, UnauthenticatedOnlyRoute } from './utils';

const App = () => {
  const { accessToken } = useAppSelector(({ auth }) => auth);
  useVerifyTokenQuery({ token: accessToken });

  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path={ROUTER_PATH.COURSE_DETAIL} element={<CourseDetail />} />
        <Route path={ROUTER_PATH.JOIN_COURSE} element={<JoinCourse />} />
        <Route path={ROUTER_PATH.ABOUT} element={<About />} />
        <Route path={ROUTER_PATH.CONTACT} element={<Contact />} />
        <Route
          path={ROUTER_PATH.COURSE_CODE_GENERATION}
          element={<CourseCodeGeneration />}
        />
        <Route
          path={ROUTER_PATH.CODE_GENERATION}
          element={<CodeGeneration />}
        />
        <Route
          path={ROUTER_PATH.HOME}
          element={<PrivateRoute component={Home} />}
        />
      </Route>
      <Route
        path={ROUTER_PATH.LOGIN}
        element={<UnauthenticatedOnlyRoute component={Login} />}
      />
      <Route
        path={ROUTER_PATH.REGISTER}
        element={<UnauthenticatedOnlyRoute component={Register} />}
      />
      <Route path="*" element={<Navigate to={ROUTER_PATH.HOME} replace />} />
    </Routes>
  );
};

export default App;

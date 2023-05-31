import './App.scss';

import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { ROUTER_PATH } from '../assets';
import { useGetUserQuery } from '../services';
import AdminPage from './admin/AdminPage';
import Login from './auth/Login';
import Register from './auth/Register';
import CourseDetail from './course/CourseDetail';
import JoinCourse from './course/JoinCourse';
import Exam from './exam/Exam';
import About from './home/About';
import Contact from './home/Contact';
import Home from './home/Home';
import LessonDetail from './lesson/LessonDetail';
import Navbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';
import {
  AdminOnlyRoute,
  PrivateRoute,
  UnauthenticatedOnlyRoute,
} from './utils';

const App = () => {
  useGetUserQuery();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevOpen) => !prevOpen);
  };

  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar toggle={toggleSidebar} isOpen={isSidebarOpen} />
            <Outlet />
          </>
        }
      >
        <Route path={ROUTER_PATH.ABOUT} element={<About />} />
        <Route path={ROUTER_PATH.CONTACT} element={<Contact />} />

        <Route
          path={ROUTER_PATH.COURSE_DETAIL}
          element={<PrivateRoute component={CourseDetail} />}
        />
        <Route
          path={ROUTER_PATH.EXAM}
          element={<PrivateRoute component={Exam} />}
        />
        <Route
          path={ROUTER_PATH.LESSON_DETAIL}
          element={<PrivateRoute component={LessonDetail} />}
        />
        <Route
          path={ROUTER_PATH.JOIN_COURSE}
          element={<PrivateRoute component={JoinCourse} />}
        />
        <Route
          path={ROUTER_PATH.HOME}
          element={<PrivateRoute component={Home} />}
        />

        <Route
          path={ROUTER_PATH.ADMIN}
          element={<AdminOnlyRoute component={AdminPage} />}
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

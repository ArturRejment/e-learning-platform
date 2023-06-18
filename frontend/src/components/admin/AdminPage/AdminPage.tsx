import './AdminPage.scss';

import CourseCodeGeneration from '../CourseCodeGeneration';
import RegisterCodeGeneration from '../RegisterCodeGeneration';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <CourseCodeGeneration />
      <RegisterCodeGeneration />
    </div>
  );
};

export default AdminPage;

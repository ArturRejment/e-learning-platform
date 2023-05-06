import { Link } from 'react-router-dom';
import { Course } from '../../../types';
import './CourseListElement.scss';

type Props = {
  course: Course;
};

const CourseList = ({ course }: Props) => {
  return (
    <div className="course_list_element">
      <div>{course.name}</div>
      <div>{course.description}</div>
      <div>
        <Link to={`course/${course.id}`}>Ucz się!</Link>
      </div>
    </div>
  );
};

export default CourseList;

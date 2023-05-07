import './CourseListElement.scss';

import { Link } from 'react-router-dom';

import { Course } from '../../../types';

type Props = {
  course: Course;
};

const CourseListElement = ({ course }: Props) => {
  const { id, name, description } = course;
  return (
    <div className="course-list-element">
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <Link to={`course/${id}`}>Ucz się!</Link>
      </div>
    </div>
  );
};

export default CourseListElement;

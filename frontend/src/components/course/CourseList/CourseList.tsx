import './CourseList.scss';

import { useGetCoursesQuery } from '../../../services';
import { Spinner } from '../../utils';

const CourseList = () => {
  const { data, error, isLoading } = useGetCoursesQuery();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;

  return (
    <div>
      CourseList
      {JSON.stringify(data)}
    </div>
  );
};

export default CourseList;

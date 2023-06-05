import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import { useGetCourseQuery } from '../../../services';
import { useCreateMutation } from '../../../services/rating';
import { RatingDto } from '../../../types/dtos';


const CourseDetail = () => {
  const { courseId = '' } = useParams<RouterPathParams['COURSE_DETAIL']>();
  const { data: { name, description } = {} } = useGetCourseQuery(courseId);
  const [value] = useState<number | null>();
  const [addRate] = useCreateMutation();

  const setValue = async (data: RatingDto) => {
    try {
      await addRate(data).unwrap();
    } catch {}
  };

  return (
    <div className="course-detail">
      <div>{name}</div>
      <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">Your rating</Typography>
        <Rating name="your-rating" value={value} onChange={setValue} />
      </Box>
      <div>{description}</div>
    </div>
  );
};

export default CourseDetail;

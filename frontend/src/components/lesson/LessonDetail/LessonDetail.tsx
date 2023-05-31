import './LessonDetail.scss';

import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import { useGetLessonQuery } from '../../../services';

const LessonDetail = () => {
  const { lessonId = '' } = useParams<RouterPathParams['LESSON_DETAIL']>();
  const {
    data: {
      name,
      description,
      pdfDescription,
      pdfTitle,
      pdfUrl,
      videoDescription,
      videoTitle,
      videoUrl,
    } = {},
  } = useGetLessonQuery(lessonId);

  return (
    <div className="lesson-detail">
      <div className="lesson-detail__name">{name}</div>
      <div className="lesson-detail__description">{description}</div>
    </div>
  );
};

export default LessonDetail;

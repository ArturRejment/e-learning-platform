import './LessonDetail.scss';

import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import { useGetLessonQuery } from '../../../services';
import VideoDetail from '../video/VideoDetail';

const LessonDetail = () => {
  const { lessonId = '' } = useParams<RouterPathParams['LESSON_DETAIL']>();
  const {
    data: {
      name,
      description,
      pdfDescription,
      pdfTitle,
      pdfUrl,
      videoTitle = '',
      videoUrl = '',
      videoDescription = '',
    } = {},
  } = useGetLessonQuery(lessonId);

  return (
    <div className="lesson-detail">
      <div className="lesson-detail__name">{name}</div>
      <div className="lesson-detail__description">{description}</div>
      <VideoDetail
        title={videoTitle}
        url={videoUrl}
        description={videoDescription}
      />
    </div>
  );
};

export default LessonDetail;

import './LessonDetail.scss';

import { useParams } from 'react-router-dom';

import { RouterPathParams } from '../../../assets';
import { useGetLessonQuery } from '../../../services';
import { FullPageSpinner } from '../../utils';
import PdfDetail from '../pdf/PdfDetail';
import VideoDetail from '../video/VideoDetail';

const LessonDetail = () => {
  const { lessonId = '' } = useParams<RouterPathParams['LESSON_DETAIL']>();
  const {
    data: {
      name,
      description,
      pdfTitle = '',
      pdfUrl = '',
      pdfDescription = '',
      videoTitle = '',
      videoUrl = '',
      videoDescription = '',
    } = {},
    isLoading,
  } = useGetLessonQuery(lessonId);

  if (isLoading) return <FullPageSpinner />;

  return (
    <div className="lesson-detail">
      <div className="lesson-detail__name">{name}</div>
      <div className="lesson-detail__description">{description}</div>
      <VideoDetail
        title={videoTitle}
        url={videoUrl}
        description={videoDescription}
      />
      <PdfDetail title={pdfTitle} url={pdfUrl} description={pdfDescription} />
    </div>
  );
};

export default LessonDetail;

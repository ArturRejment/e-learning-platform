import './VideoDetail.scss';

import VideoViewer from '../VideoViewer';

type Props = {
  title: string;
  url: string;
  description: string;
};

const VideoDetail = ({ title, url, description }: Props) => {
  return (
    <div className="video-detail">
      <h3 className="video-detail__title">{title}</h3>
      <div className="video-detail__description">{description}</div>
      {url && <VideoViewer title={title} url={url} />}
    </div>
  );
};

export default VideoDetail;

import './VideoDetail.scss';

type Props = {
  title: string;
  url: string;
};

const VideoDetail = ({ title, url }: Props) => {
  // pass url to see video, e.g. https://www.youtube.com/embed/{id}

  return (
    <div className="video-detail">
      <h3>{title}</h3>
      <div>
        <iframe
          className="video-detail__iframe"
          src={url}
          title="YouTube video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoDetail;

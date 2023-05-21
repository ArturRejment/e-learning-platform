import './VideoDetail.scss';

type Props = {
  title: string;
  url: string;
};

const VideoDetail = ({ title, url }: Props) => {
  // żeby można było wyświetlić film z yt należy podać url = https://www.youtube.com/embed/{id}

  return (
    <div className="video-detail">
      <h3>{title}</h3>
      <div>
        <iframe
          className="video-iframe"
          src={url}
          title="YouTube video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoDetail;

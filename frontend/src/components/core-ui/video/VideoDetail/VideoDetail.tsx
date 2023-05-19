import './VideoDetail.scss';

const VideoDetail = () => {
  // dodanie videoId  -> pobieranie danych z bazy
  const baseUrl = 'https://www.youtube.com/embed/';
  const title = 'Film 1';
  const url = `${baseUrl}1FZvV2lSM5Q`;

  return (
    <div className="video-detail">
      <h3>{title}</h3>
      <div>
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoDetail;

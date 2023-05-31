import './VideoViewer.scss';

type Props = {
  title: string;
  url: string;
};

const VideoViewer = ({ title, url }: Props) => {
  return (
    <div className="video-viewer">
      <iframe
        className="video-viewer__iframe"
        src={url}
        title={title}
        allowFullScreen
      />
    </div>
  );
};

export default VideoViewer;

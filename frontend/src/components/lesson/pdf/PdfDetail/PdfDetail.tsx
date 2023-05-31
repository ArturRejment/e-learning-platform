import './PdfDetail.scss';

import PdfViewer from '../PdfViewer';

type Props = {
  title: string;
  url: string;
  description: string;
};

const PdfDetail = ({ title, url, description }: Props) => {
  return (
    <div className="pdf-detail">
      <h3 className="pdf-detail__title">{title}</h3>
      <div className="pdf-detail__description">{description}</div>
      {url && <PdfViewer file={url} />}
    </div>
  );
};

export default PdfDetail;

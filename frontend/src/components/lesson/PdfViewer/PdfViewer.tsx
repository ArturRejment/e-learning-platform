import './PdfViewer.scss';

import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

type PDFFile = string | File | null;
type Props = {
  file: PDFFile;
};

const PdfViewer = ({ file }: Props) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({
    numPages: nextNumPages,
  }: PDFDocumentProxy) => {
    setNumPages(nextNumPages);
  };

  return (
    <div className="pdf-viewer">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-viewer__document"
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className="pdf-viewer__buttons">
        <button
          className="pdf-viewer__button"
          type="button"
          onClick={() => setPageNumber((prevPage) => prevPage - 1)}
          disabled={pageNumber <= 1}
        >
          Previous Page
        </button>
        <button
          className="pdf-viewer__button"
          type="button"
          onClick={() => setPageNumber((prevPage) => prevPage + 1)}
          disabled={pageNumber >= numPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;

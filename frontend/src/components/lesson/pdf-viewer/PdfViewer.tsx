/* eslint-disable import/no-extraneous-dependencies */ //linia 5, z jakiegoś powodu nie działa
import './PdfViewer.scss';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

type Props = {
  file: any;
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ file }: Props) => {
  const [numPages1, setNumPages] = useState(null);
  const [pageNumber1, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber1 < numPages1) {
      setPageNumber(pageNumber1 + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber1 > 1) {
      setPageNumber(pageNumber1 - 1);
    }
  };

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-container"
      >
        <Page
          pageNumber={pageNumber1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className="controls">
        <button
          className="controls_button"
          type="button"
          onClick={prevPage}
          disabled={pageNumber1 === 1}
        >
          Prev
        </button>
        <button
          className="controls_button"
          type="button"
          onClick={nextPage}
          disabled={pageNumber1 === numPages1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;

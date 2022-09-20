import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import samplePdf from './Pranit.pdf'
import {
  Container,
  Button
} from "reactstrap";

function MyStory() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );


  return (
    <Container>
      <div style={{textAlign:"center"}} className="justify-content-center">

        <Document
          file={samplePdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>

        <div style={{ textAlign: "center" }}>
          <Button onClick={goToPrevPage}>Prev</Button>
          <Button onClick={goToNextPage}>Next</Button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default MyStory
import React from 'react';
// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
// import samplePdf from './Pranit.pdf'


// import {
//   Button, Progress,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Modal,
//   ModalBody,
//   Input,
//   FormGroup
// } from "reactstrap";

function MyStory() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const [loading, setLoading] = useState(true);
  // const [amountLoaded, setAmountLoaded] = useState(0);
  // const [totalAmount, setTotalAmount] = useState(0);
  // const [modal, setModal] = useState(false);
  // const [passCode, setPassCode] = useState("");
  // const lst = ["mrunal","kapil"]

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  // const onDocumentLoadProgress = ({ loaded, total }) => {
  //   setAmountLoaded(loaded)
  //   setTotalAmount(total)
  // }

  // const goToPrevPage = () =>
  //   setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  // const goToNextPage = () => {
  //   if(pageNumber%2 !== 0){
  //     setModal(true);
  //     return;
  //   }
  //   setPageNumber(
  //     pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
  //   )
  // };

  // const handleChange = (e) => {
  //   var st = e.target.value
  //   setPassCode(st)
  // }


  // const unlockChapter = () => {
  //   var st = passCode.trim().toLowerCase()
  //   if (st !== lst[Math.floor(Math.random()*lst.length)]){
  //     setPassCode("")
  //     alert("Wrong Code");
  //   }
  //   else{
  //     setPassCode("")
  //     setPageNumber(
  //       pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
  //     )
  //   }
  //   setModal(false);
  // }

 
  return (
    <div>
      <h6>You are not authorised to view this. Fuck yourself to view this</h6>
    </div>
    // <div style={{ textAlign: "center" }} className="justify-content-center">
    //   {loading ? <div style={{ margin: 20 }} className="progress-container progress-info">
    //     <span className="progress-badge">Loading...</span>
    //     <Progress max={totalAmount} value={amountLoaded}>
    //       <span className="progress-value">{Math.floor(amountLoaded / totalAmount * 100)}%</span>
    //     </Progress>
    //   </div> : <div></div>}
    //   <div>

    //   </div>
    //   <Document
    //     onLoadProgress={onDocumentLoadProgress}
    //     file={samplePdf}
    //     onLoadSuccess={onDocumentLoadSuccess}
    //   >
    //     <Page
    //       onLoadProgress={onDocumentLoadProgress}
    //       onRenderSuccess={() => setLoading(false)} width={window.innerWidth} pageNumber={pageNumber} />
    //   </Document>

    //   <Modal isOpen={modal} toggle={() => setModal(false)}>
    //     <div className="modal-header justify-content-center">
    //       <button
    //         className="close"
    //         type="button"
    //         onClick={() => setModal(false)}
    //       >
    //         <i className="now-ui-icons ui-1_simple-remove"></i>
    //       </button>
    //       <h4 className="title title-up">New Chapter {'<'}3</h4>
    //     </div>
    //     <ModalBody>
    //       <FormGroup className="has-success">
    //         <Input
    //           className="form-control-success"
    //           type="text"
    //           placeholder="Enter Unlocking Code"
    //           value={passCode}
    //           onChange={handleChange}
    //         ></Input>
    //       </FormGroup>

    //     </ModalBody>
    //     <div className="modal-footer">
    //       <Button onClick={unlockChapter} color="default" type="button">
    //         Submit
    //       </Button>
    //       <Button
    //         color="danger"
    //         type="button"
    //         onClick={()=>{setModal(false)}}
    //       >
    //         Close
    //       </Button>
    //     </div>
    //   </Modal>


    //   <div style={{ textAlign: "center" }}>
    //     <Button onClick={goToPrevPage}>Prev</Button>
    //     <Button onClick={goToNextPage}>Next</Button>
    //     <p>
    //       Page {pageNumber} of {numPages}
    //     </p>
    //     <Pagination
    //       style={{ position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }}
    //       className="pagination pagination-info"
    //       listClassName="pagination-info"
    //     >
    //       {[...Array(10)].map((x, i) =>
    //         <PaginationItem id={i} className={pageNumber - 1 === i ? "active" : ""}>
    //           <PaginationLink
    //             // href="#pablo"
    //             // onClick={(e) => setPageNumber(i + 1)}
    //           >
    //             {i + 1}
    //           </PaginationLink>
    //         </PaginationItem>
    //       )}
    //     </Pagination>
    //   </div>
    //   <div>
    //     <br />
    //   </div>

    // </div>
  )
}

export default MyStory
import React, { useContext, useState } from 'react'
import { UserContext } from '../App';
import MyText from '../components/Text';
import myResumePdf from "../asset/myResume.pdf"





import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const MyResume = (props) => {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const { pdf } = props;
  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
      className='mx-auto '
    >
      {/* <Page pageNumber={1} /> */}
      {/* <Page pageNumber={2} /> */}

      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} className='mb-4' />
      ))}
    </Document>
  );
}




function Resume() {
  const { color, text, handelCancelPage } = useContext(UserContext)

  const pdfDwonload = () => {
    // using Java Script method to get PDF file
    fetch('satyamkushwaha(CV).pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        // const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = myResumePdf;
        alink.download = 'satyamkushwaha(CV).pdf';
        alink.click();
      })
    })
  }

  return (
    <div className='h-100 px-3 position-relative '>
      <div className='position-absolute cancelLogoContainer'>
        <i className={"close-button fas fa-times-circle fa-3x cancelLogo "} onClick={handelCancelPage} />
      </div>
      <div className='mx-3  mainPageHeader' >
        <div className='mainPageHeader_heading'>
          <MyText textColor={color} className="fw-bolder">{text}</MyText>
        </div>
      </div>
      <div>
        <div className='d-flex justify-content-between'>

          <div>
            <div className='mb-3' style={{ fontSize: "23px" }}>
              Resume
            </div>
            <div className={`bg-${color} mb-3`} style={{ width: "2rem", height: "5px", borderRadius: "5px" }} />
          </div>
          <div
            className=' mt-2 me-md-4'
            onClick={pdfDwonload}
          >
            <button className='btn d-flex border-light m-0 downloadPdfBtn'>
              <span className="mx-2 text-light"><i class="fa-solid fa-file-arrow-down"></i></span>
              <span className='text-light'>Download</span>
              <span className='text-purpul'>Resume</span>
            </button>

          </div>
        </div>
        <div className='card bg-darkBule w-100'>
          <MyResume pdf={myResumePdf} />
        </div>
      </div>

    </div>
  )
}

export default Resume
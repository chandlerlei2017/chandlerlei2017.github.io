import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import Footer from '../components/Footer'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div>
      <div className="col-sm-6 offset-sm-3 pt-5 mt-5 pb-5 white">
        <a href='/2BResume.pdf' className="btn btn-primary-blue mb-3" download>Download Me!</a>
        <Document file="2BResume.pdf">
        <Page pageNumber={1} />
        </Document>
      </div>
      <Footer/>
    </div>
  );
}

export default Resume;
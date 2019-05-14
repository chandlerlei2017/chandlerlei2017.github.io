import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className="pt-5 mt-5 pb-5 white">
      <div className="col-sm-6 offset-sm-3">
        <a href='/2BResume.pdf' className="btn btn-primary-blue mb-3" download>Download Me!</a>
        <Document file="2BResume.pdf">
        <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
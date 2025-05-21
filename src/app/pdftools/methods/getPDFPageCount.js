'use client'

import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import path from 'path';
GlobalWorkerOptions.workerSrc = path.resolve('../','pdf.worker.js');


const getPDFPageCount = async (file) => {
  const fileURL = URL.createObjectURL(file);
  const doc = await getDocument({ url: fileURL }).promise;
  console.log(doc,'doc');
  return doc.numPages;
};

export default getPDFPageCount;


//https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.js
//"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.min.mjs"
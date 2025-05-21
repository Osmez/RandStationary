import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import path from 'path';
GlobalWorkerOptions.workerSrc = path.resolve('../','pdf.worker.js');

const imageDataURLFromDoc = async (file, pageNumber) => {
  const page = await file.getPage(pageNumber);
  var scale = 1.5;
  var viewport = page.getViewport({ scale: scale });
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  var renderContext = {
    canvasContext: context,
    viewport: viewport,
  };
  var renderTask = page.render(renderContext);
  await renderTask.promise;
  URL.revokeObjectURL(fileURL);
  return canvas.toDataURL();
};


export default imageDataURLFromDoc;

import { createPDF, pdfArrayToBlob, breakPDF, zipToBlob } from "pdf-actions";
import { saveAs } from "file-saver";

const breakPagesHandler = async (file, pageNumber) => {

  const pdfFile = await createPDF.PDFDocumentFromFile(file);
  const docsFile = await breakPDF(
    pdfFile,
    1,
    true,
    file.degrees
  );

  for (let i = 0; i < docsFile.length; i++) {
    const docArray = await docsFile[i].save();

    if (i+1 == pageNumber) {
      const pdfBlob = pdfArrayToBlob(docArray);
      saveAs(pdfBlob, `page-${i + 1}-${file.name}`);
    }
  }
};

export default breakPagesHandler;

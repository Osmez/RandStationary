import React, { useRef } from "react";
import LeftSideBox from "../LeftSideBox";
import FilePreviewGrid from "./FilePreviewGrid";
import getPDFPageCount from "../../methods/getPDFPageCount";
export default function PDFFilesProcess({
  files,
  setFiles,
  sortableFilePreviewGrid,
  addFileOptions,
  downloadHandler,
  LeftSideBoxExtra,
  FilePreviewExtra,
  texts,
  lang
}) {
  const inputButtonRef = useRef(null);

  const handleDeleteFilesClick = () => {
    setFiles([{ deleted: true }]);
  };
  const handleAddFileButtonClick = () => {
    inputButtonRef.current.click();
  };

  const onFileChange = async (e) => {
    const temp = [];
    const newFiles = e.target.files;

    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];
      const pg = await getPDFPageCount(file);
      file.pageCount = pg;
      temp.push(file);
    }

    //setFiles([...files, ...temp]);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hidden Input Tag for AddFile Button */}
      <input
        type="file"
        className="hidden"
        accept={addFileOptions.fileType}
        ref={inputButtonRef}
        multiple={addFileOptions.multiple}
        onChange={(e) => onFileChange(e)}
      />

      {/* PDF Box */}

      <div className="px-4 py-6 md:px-24 md:py-12 flex flex-col items-center md:items-start">
       

        {/* Box Below Download Button */}
        <div dir={texts.dir[lang]} className="flex flex-col  md:flex-row w-full justify-between mt-6">
          {/* Left Side Box */}
          <LeftSideBox
            handleAddFileButtonClick={handleAddFileButtonClick}
            handleDeleteFilesClick={handleDeleteFilesClick}
            multiple={addFileOptions.multiple}
            texts={texts}
            lang={lang}
          >
            {LeftSideBoxExtra && <LeftSideBoxExtra />}
          </LeftSideBox>

          {/* Right Side Box / File Preview */}
          <div className=" w-3/4 p-4 border-green-700 rounded-lg m-auto border-2 border-dashed">
            <FilePreviewGrid
              files={files}
              setFiles={setFiles}
              FilePreviewExtra={FilePreviewExtra}
              sortableFilePreviewGrid={sortableFilePreviewGrid}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

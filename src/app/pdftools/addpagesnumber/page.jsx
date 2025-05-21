'use client'
import React, { useContext, useState } from "react";
import FileUploader from "../components/FileUploader.jsx";
import PDFFilesProcess from "../components/PDFFile/PDFFilesProcess.jsx";
import addPageNumbersHandler from "../methods/addPageNumbers";
import LeftSidePageNumbers from "../components/PDFFile/LeftSideBoxButtons/LeftSidePageNumbers";
import getPDFPageCount from "../methods/getPDFPageCount.js";
import {LanguageContext} from "@/app/Context/LanguageContext.jsx";
import texts from '@/app/texts.json';

export default function AddPagesNumbers(){

    const lang = useContext(LanguageContext);
    const [files, setFiles] = useState([]);

  const onFileChange = async (e) => {
    const temp = [];
    const newFiles = e.target.files;

    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];
      file.pageCount = await getPDFPageCount(file);
      temp.push(file);
    }

    setFiles([...files, ...temp]);
  };
  const FilePreviewExtra = ({ file, setDeleted, imageRef }) => {
    return null;
  };

  const LeftSideBoxExtra = () => {
    return <LeftSidePageNumbers file={files[0]} />;
  };

  return (
    <div className="overflow-x-hidden">
        <div className="w-full h-[150px]"></div>

      {/* Banner */}
      <div className="bg-green-700 border-gray-600 border-t-2 border-dotted text-white flex flex-col items-center justify-center h-[30vh] w-screen">
        <div className="text-4xl text-white font-medium leading-normal tracking-wide">
          {texts.addpagenumber[lang]}
        </div>
        <div>{texts.addpagenumbertext[lang]}</div>
      </div>

      {files.length === 0 && (
        <FileUploader
          onFileChange={onFileChange}
          fileType=".pdf"
          multiple={false}
          choose={texts.choosefile[lang]}
          drops={texts.ordrop[lang]}
        />
      )}
      {files.length !== 0 && (
        <PDFFilesProcess
          files={files}
          sortableFilePreviewGrid={false}
          setFiles={setFiles}
          addFileOptions={{
            fileType: ".pdf",
            multiple: false,
          }}
          downloadHandler={() => addPageNumbersHandler(files)}
          LeftSideBoxExtra={LeftSideBoxExtra}
          FilePreviewExtra={FilePreviewExtra}
          texts={texts}
          lang={lang}
        />
      )}
    </div>
  );
}
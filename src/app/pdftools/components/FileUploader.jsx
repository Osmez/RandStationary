import React, { useRef } from "react";
import { PDFIcon } from "./icons";

export default function FileUploader({ onFileChange, multiple, fileType, choose, drops }) {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.click();

  return (
    <div className="flex mx-auto my-4 items-center justify-center w-[220px] h-[220px]">
      <input
        type="file"
        className="hidden"
        accept={fileType}
        ref={inputRef}
        multiple={multiple}
        onChange={(e) => onFileChange(e)}
      />
      <div
        className="w-[210px] h-[210px] border-2 border-green-700 border-dashed rounded-xl flex items-center justify-center flex-col cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex w-48 items-center justify-evenly mb-4 bg-green-700 p-4 rounded-xl">
          <PDFIcon />
          {choose}
        </div>

        <div className="text-slate-400">{drops}</div>
      </div>
    </div>
  );
}

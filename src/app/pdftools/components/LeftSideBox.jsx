import React, { useContext } from "react";
import texts from '../../texts.json';
import {LanguageContext} from '../../Context/LanguageContext';

export default function LeftSideBox({
  children,
  handleAddFileButtonClick,
  handleDeleteFilesClick,
  multiple,
}) {
  const lang = useContext(LanguageContext)
  return (
    <div className="flex flex-col w-full md:w-1/3 md:mr-2">
      {multiple && (
        <button
          className="px-4 py-2 w-full mb-2 bg-green-700 rounded-sm text-md"
          onClick={handleAddFileButtonClick}
        >
          {texts.addfiles[lang]}
        </button>
      )}
      {children ? children : null}
      {multiple && (
        <button
          className="px-4 py-2 bg-green-700 mt-2 rounded-sm tracking-wider"
          onClick={handleDeleteFilesClick}
        >
          {texts.deletefiles[lang]}
        </button>
      )}
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import texts from '@/app/texts.json';
import {LanguageContext} from "@/app/Context/LanguageContext";

export default function LeftSidePageNumbers({ file }) {
  const lang = useContext(LanguageContext);

  useEffect(() => {
    file.firstPageNumber = 1;
    file.startingPage = 1;
    file.endingPage = file.pageCount;
    file.margin = "Recommended";
    file.pageNumberPosition = "b-c";
    file.pageNumberFontSize = 12;
  }, []);

  const onFirstPageNumberChange = (e) => {
    let num = parseInt(e.target.value);
    if (num < 1) {
      num = 1;
      e.target.value = 1;
    }
    file.firstPageNumber = num;
  };
  const onStartingPageChange = (e) => {
    let num = parseInt(e.target.value);
    if (num < 1) {
      num = 1;
      e.target.value = 1;
    }
    if (num > file.pageCount) {
      num = file.pageCount;
      e.target.value = file.pageCount;
    }
    file.startingPage = num;
  };
  const onEndingPageChange = (e) => {
    let num = parseInt(e.target.value);
    if (num < 1) {
      num = 1;
      e.target.value = 1;
    }
    if (num > file.pageCount) {
      num = file.pageCount;
      e.target.value = file.pageCount;
    }
    file.endingPage = num;
  };
  const onPageNumberPositionChange = (e) => {
    file.pageNumberPosition = e.target.value;
  };
  const onMarginChange = (e) => {
    file.margin = e.target.value;
  };
  const onPageNumberFontSizeChange = (e) => {
    let num = parseInt(e.target.value);
    if (num < 1) {
      num = 1;
      e.target.value = 1;
    }
    file.pageNumberFontSize = num;
  };

  return (
    <div className="w-full py-2 tracking-wider border-y-2 border-green-700">
      {texts.pagenumberoptions[lang]}
      <div className="flex justify-between items-center mt-2">
        {texts.position[lang]}
        <div className="grid grid-cols-3 border-2">
          <div className="w-[30px] h-[30px] flex items-center justify-center border-r-2 border-b-2 border-dotted">
            <input
              type="radio"
              name="position"
              value="t-l"
              onChange={onPageNumberPositionChange}
            />
          </div>
          <div className="w-[30px] h-[30px] flex items-center justify-center border-r-2 border-b-2 border-dotted">
            <input
              type="radio"
              name="position"
              value="t-c"
              onChange={onPageNumberPositionChange}
            />
          </div>
          <div className="w-[30px] h-[30px] flex items-center justify-center border-b-2 border-dotted">
            <input
              type="radio"
              name="position"
              value="t-r"
              onChange={onPageNumberPositionChange}
            />
          </div>
          <div className=" w-[30px] h-[30px] border-r-2 border-b-2 border-dotted"></div>
          <div className=" w-[30px] h-[30px] border-r-2 border-b-2 border-dotted"></div>
          <div className=" w-[30px] h-[30px] border-b-2 border-dotted"></div>
          <div className="w-[30px] h-[30px] flex items-center justify-center border-r-2 border-dotted">
            <input
              type="radio"
              name="position"
              value="b-l"
              onChange={onPageNumberPositionChange}
            />
          </div>
          <div className="w-[30px] h-[30px] flex items-center justify-center border-r-2 border-dotted">
            <input
              type="radio"
              name="position"
              defaultChecked={true}
              value="b-c"
              onChange={onPageNumberPositionChange}
            />
          </div>
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <input
              type="radio"
              name="position"
              value="b-r"
              onChange={onPageNumberPositionChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        {texts.margin[lang]}
        <select
          id="position"
          className="bg-green-700 w-1/2 py-2 pl-2 rounded-md"
          defaultValue="Recommended"
          onChange={onMarginChange}
        >
          <option value="Small">Small</option>
          <option value="Recommended">Recommended</option>
          <option value="Big">Big</option>
        </select>
      </div>
      <div className="flex justify-between items-center mt-2">
        {texts.startingpage[lang]}
        <input
          className="w-[50px] text-center caret-transparent bg-green-700 rounded-md"
          type="number"
          defaultValue="1"
          min="1"
          max={file.pageCount}
          onChange={onStartingPageChange}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        {texts.endingpage[lang]}
        <input
          className="w-[50px] text-center caret-transparent bg-green-700 rounded-md"
          type="number"
          defaultValue={file.pageCount}
          min="1"
          max={file.pageCount}
          onChange={onEndingPageChange}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        {texts.firstnumber[lang]}
        <input
          className="w-[50px] text-center caret-transparent bg-green-700 rounded-md"
          type="number"
          defaultValue="1"
          min="1"
          onChange={onFirstPageNumberChange}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        {texts.fontsize[lang]}
        <input
          className="w-[50px] text-center caret-transparent bg-green-700 rounded-md"
          type="number"
          defaultValue="12"
          min="1"
          onChange={onPageNumberFontSizeChange}
        />
      </div>
    </div>
  );
}

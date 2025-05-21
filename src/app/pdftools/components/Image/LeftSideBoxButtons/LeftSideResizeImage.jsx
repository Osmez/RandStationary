'use client'
import React,{useContext} from "react";
import texts from '../../../../texts.json';
import {LanguageContext} from '../../../../Context/LanguageContext';

export default function LeftSideResizeImage() {
  const lang = useContext(LanguageContext);

  const resizeSizes = [
    "Same as Image",
    "A4",
    "A3",
    "A5",
    "Legal",
    "Letter",
    "Tabloid",
  ];
  const orientations = ["Portrait", "Landscape"];
  const positions = ["Start", "Center", "End"];

  return (
    <div className="w-full mt-2 py-2 tracking-wider border-y-2 border-green-700">
      <h3 className="text-center">{texts.pagesettings[lang]}</h3>
      <div dir={texts.dir[lang]} className="flex justify-between items-center">
        {texts.size[lang]}
        <select
          id="pageSize"
          className="bg-green-700 w-1/2 py-2 pl-2 rounded-md"
        >
          {resizeSizes.map((resizeSize, i) => (
            <option key={i} value={resizeSize}>
              {resizeSize}
            </option>
          ))}
        </select>
      </div>
      <div dir={texts.dir[lang]} className="flex justify-between items-center mt-2">
        {texts.orientation[lang]}
        <select
          id="pageOrientation"
          className="bg-green-700 w-1/2 py-2 pl-2 rounded-md"
        >
          {orientations.map((orientation, i) => (
            <option key={i} value={orientation}>
              {orientation}
            </option>
          ))}
        </select>
      </div>
      <div dir={texts.dir[lang]} className="flex justify-between items-center mt-2">
        {texts.imagepos[lang]}
        <select
          id="imagePosition"
          className="bg-green-700 w-1/2 py-2 pl-2 rounded-md"
        >
          {positions.map((position, i) => (
            <option key={i} value={position}>
              {position}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

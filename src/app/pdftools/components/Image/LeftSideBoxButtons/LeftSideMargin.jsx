'use client'
import React, { useContext } from "react";
import texts from '../../../../texts.json';
import {LanguageContext} from '../../../../Context/LanguageContext';

export default function LeftSideMargin({ margin, setMargin }) {

  const lang = useContext(LanguageContext);
  const units = ["Inches", "Centimeters", "Millimeters"];
  const marginSides = [
    {
      text: texts.left[lang],
      arrayIndex: 0,
      unitId: "marginLeftUnit",
      textInputId: "marginLeftValue",
    },
    {
      text: texts.top[lang],
      arrayIndex: 1,
      unitId: "marginTopUnit",
      textInputId: "marginTopValue",
    },
    {
      text: texts.right[lang],
      arrayIndex: 2,
      unitId: "marginRightUnit",
      textInputId: "marginRightValue",
    },
    {
      text: texts.bottom[lang],
      arrayIndex: 3,
      unitId: "marginBottomUnit",
      textInputId: "marginBottomValue",
    },
  ];

  const handleMarginValueChange = (marginIndex, unitId, textInputId) => {
    const newMargin = margin;
    const unit = document.getElementById(unitId).value;

    const newValue = document.getElementById(textInputId).value;
    const newValueFloat = newValue === "" ? 0 : parseFloat(newValue);

    let newValueMillimeter = newValueFloat;

    if (unit === "Inches") {
      newValueMillimeter =
        Math.round((25.4 * newValueFloat + Number.EPSILON) * 100) / 100;
    } else if (unit === "Centimeters") {
      newValueMillimeter =
        Math.round((10 * newValueFloat + Number.EPSILON) * 100) / 100;
    }

    newMargin[marginIndex] = newValueMillimeter;
    setMargin(newMargin);
  };

  return (
    <div className="w-full mt-2 py-2 tracking-wider border-b-2 border-green-700">
      <h3 className="text-center">{texts.marginsettings[lang]}</h3>
      {marginSides.map((marginSide, i) => (
        <div dir={texts.dir[lang]} className="mt-2 flex justify-between items-center" key={i}>
           {marginSide.text}
          <div>
            <input
              type="number"
              id={marginSide.textInputId}
              className="bg-green-700 w-[100px] m-2 text-center h-[40px] rounded-md"
              step={0.1}
              defaultValue={0}
              onChange={() =>
                handleMarginValueChange(
                  marginSide.arrayIndex,
                  marginSide.unitId,
                  marginSide.textInputId
                )
              }
            />
            <select
              id={marginSide.unitId}
              className="bg-green-700 w-fit h-[40px] rounded-md"
              onChange={() =>
                handleMarginValueChange(
                  marginSide.arrayIndex,
                  marginSide.unitId,
                  marginSide.textInputId
                )
              }
            >
              {units.map((unit, i) => (
                <option key={i} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}

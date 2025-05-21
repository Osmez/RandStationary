import React,{useRef} from "react"
import { PDFIcon } from "./components/icons";
import texts from '@/app/texts.json';
export default function FileUpload({onFileChange,multiple,lang}){

    const inputRef = useRef(null);
    const handleClick = () => inputRef.current.click();

    return(
        <div className="m-auto sm:m-2 flex items-center justify-center w-[220px] h-[220px]">
            <input
                type="file"
                className="hidden"
                accept=".pdf"
                multiple={multiple}
                ref={inputRef}
                onChange={(e) => onFileChange(e)}
            />
            <div
                className="w-[200px] h-[200px] border-2 border-green-700 border-dashed rounded-xl flex items-center justify-center flex-col cursor-pointer"
                onClick={handleClick}
            >
                <div className="flex w-48 items-center justify-evenly mb-4 bg-green-700 p-4 rounded-xl">
                <PDFIcon />
                {texts.choosefile[lang]}
                </div>

                <div className="text-slate-400">{texts.ordrop[lang]}</div>
            </div>
        </div>
    )
}
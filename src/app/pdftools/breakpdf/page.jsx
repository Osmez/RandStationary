'use client'

import React, { useContext, useState } from "react";
import getPDFPageCount from "../methods/getPDFPageCount.js";
import FileUpload from '../FIleUpload.jsx';
import FileView from '../FileView.jsx';
import TheBreak from './TheBreak.jsx';
import texts from '@/app/texts.json';
import { LanguageContext } from "@/app/Context/LanguageContext.jsx";
import { RandButton } from "@/app/ui/randbutton.jsx";

export default function BreakPDF(){

    const [theFile, setTheFile] = useState(null);
    const [pages, setPages] = useState([]);
    const lang = useContext(LanguageContext);

    const OnChange = async (e)=>{
        const temp = [];
        const newFiles = e.target.files;

        const file = newFiles[0];
        const pg = await getPDFPageCount(file);
        for(let i=0; i < pg; i++){
            temp.push(i);
        }
        file.pageCount = pg;
        file.degrees = 0;
        setPages(temp);
        setTheFile(file);
    }

    return(
        <section className="w-full min-h-screen">
            <div className="w-full h-[150px]"></div>
           <div dir={texts.dir[lang]} className=" bg-stone-200 dark:bg-stone-700 flex justify-start items-center py-3 flex-row-reverse  rounded-md m-auto w-4/5  md:flex-row flex-wrap">
                {!theFile? <FileUpload onFileChange={OnChange} lang={lang} />:<div className="m-auto"><FileView file={theFile} /><RandButton text={texts.clear[lang]} fun={()=>{setTheFile(null);setPages([])}} /></div>} 
                <div className="p-3 m-2 text-center md:text-start">
                    <h3 className="text-4xl font-bold">{texts.breakpdf[lang]}</h3>
                    <h3 className="text-2xl">{texts.breaktext[lang]}</h3>
                </div>
            </div>   
            <TheBreak file={theFile} pages={pages} lang={lang} />
            
        </section>
    )


    
}


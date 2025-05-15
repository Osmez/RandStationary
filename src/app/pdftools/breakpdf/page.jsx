'use client'

import { useContext, useState } from "react";
import { Page, Document, pdfjs } from 'react-pdf';
import { RandSubmit , RandButton } from '@/app/ui/randbutton';
import '../AnnotationLayer.css';
import '../TextLayer.css';
import {saveAs} from 'file-saver';
import {WarningNotify} from '@/app/ui/Notifications';
import { LanguageContext } from '../../Context/LanguageContext';
import PDFItem from './item';
import path from 'path';
import texts from '@/app/texts.json';

export default function BreakPDF(){
    pdfjs.GlobalWorkerOptions.workerSrc = path.resolve('../','pdf.worker.min.mjs');
   
    const lang = useContext(LanguageContext);
   
    return(
        <section className="w-full min-h-screen">
            <div className="w-full h-[200px]"></div>
            <div className="p-2 border-2 border-green-800 w-2/3 m-auto rounded-md">
                <h3 className="text-center" dir={texts.dir[lang]}>{texts.breaktext[lang]}</h3>
                <form  className="w-full  flex flex-col sm:flex-row justify-center items-center p-2 md:flex-row">
                    <input className="my-2" type="file" name="file" />
                    <RandSubmit text={texts.breakpdf[lang]} />
                </form>
            </div>
           
           
            <div className="w-full h-fit p-2 flex flex-wrap justify-center items-center">

            </div>
        </section>
    )
}
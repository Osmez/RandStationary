'use client'
import { createPDF,  breakPDF } from "pdf-actions";
import { useContext, useState } from "react";
import { Page, Document, pdfjs } from 'react-pdf';
import { RandSubmit , RandButton } from '@/app/ui/randbutton';
import 'react-pdf/dist/cjs/page/AnnotationLayer.css';
import 'react-pdf/dist/cjs/page/TextLayer.css';
import {saveAs} from 'file-saver';
import {WarningNotify} from '@/app/ui/Notifications';
import { LanguageContext } from '../../Context/LanguageContext';
import PDFItem from './item';
import path from 'path';
import texts from '@/app/texts.json';

export default function BreakPDF(){
    pdfjs.GlobalWorkerOptions.workerSrc = path.resolve('../','pdf.worker.min.mjs');
   
    const lang = useContext(LanguageContext);
    const [breaks, setBreaks] = useState([]);
    const [rel, setRel] = useState(null);
    const [notify, setNotify] = useState(false);

    const onDocumentLoadSuccess = ( numPages )=>{
        setNumPages(numPages["file"]);
    }
    
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const okNot = ()=>{
        setNotify(false);
    }

    async function showPDF(pf, state){
        if(!rel){setNotify(true);return;}
        const breakTheFile = await breakPDF(rel,1);
        const brks = [];
        breakTheFile.forEach(async(d)=>{
            await d.save().then(res=>{
                const obj = {data:null};obj.data = res;brks.push(obj);
                if(brks.length == (pf+1)){
                    if(state == 'tab'){
                        const fe =brks[pf];
                        const bob = new Blob([fe.data], { type: 'application/pdf' })
                        const pdfrl = URL.createObjectURL(bob);
                        window.open(pdfrl,'_blank');
                    }else if(state == 'save'){
                        const filename = 'RandPDF';
                        const fe =brks[pf];
                        const bob = new Blob([fe.data], { type: 'application/pdf' });
                        saveAs(bob, filename);
                    }
                    
                }
            }
        )});
    }
    
    async function subb(e){
        e.preventDefault();
        const formd = new FormData(e.target);
        const file = formd.get('file');
        if(file.size == 0){
            setNotify(true);
            return;
        }else{
            const pdfFile = await createPDF.PDFDocumentFromFile(file);
            setRel(pdfFile);
            const breakTheFile = await breakPDF(pdfFile,1);
            
            const brks = [];
            breakTheFile.forEach(async(d)=>{await d.save().then(res=>{const obj = {data:null};obj.data = res;brks.push(obj);
                if(brks.length == breakTheFile.length){setBreaks(brks)}})})
        }
    }
    return(
        <section className="w-full min-h-screen">
            <div className="w-full h-[200px]"></div>
            <div className="p-2 border-2 border-green-800 w-2/3 m-auto rounded-md">
                <h3 className="text-center" dir={texts.dir[lang]}>{texts.breaktext[lang]}</h3>
                <form onSubmit={subb} className="w-full  flex flex-col sm:flex-row justify-center items-center p-2 md:flex-row">
                    <input className="my-2" type="file" name="file" />
                    <RandSubmit text={texts.breakpdf[lang]} />
                </form>
            </div>
           
           
            <div className="w-full h-fit p-2 flex flex-wrap justify-center items-center">
            {
                breaks.length > 0? breaks.map(
                    (it, id)=>  <PDFItem key={id} PDF={id} viewPDF={showPDF}>
                                <Document  className={'m-2'} file={it} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page scale={0.3} pageNumber={pageNumber} />
                                </Document>
                    </PDFItem>
                ):''
            }
            {notify? <WarningNotify text={texts.selecttobreak[lang]} ><RandButton text={texts.ok[lang]} fun={okNot} /></WarningNotify>:''}

            </div>
        </section>
    )
}
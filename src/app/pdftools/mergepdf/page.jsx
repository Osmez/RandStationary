'use client'

import React, { useContext, useState } from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import {arrayMoveImmutable} from "array-move";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
GlobalWorkerOptions.workerSrc = path.resolve('../','pdf.worker.js');
import '../AnnotationLayer.css';
import '../TextLayer.css';
import { RandButton, RandSubmit } from '@/app/ui/randbutton';
import { LanguageContext } from '../../Context/LanguageContext';
import {WarningNotify} from '@/app/ui/Notifications';
import path from 'path';
import texts from '@/app/texts.json';

export default function MergePDF(){

    const lang = useContext(LanguageContext);
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [notify, setNotify] = useState(false);
    const [files, setFiles] = useState([]);
    const [merge, setMerge] = useState(false);

    function onsub(event){
        event.preventDefault();
        const formD = new FormData(event.target);
       
        if(formD.get('file').size == 0){
            setNotify(true);
            return;
        }
        const f = []
        formD.forEach(
            (e)=>{f.push(e)}
        )
        setFiles(f);
    }

    const onSortEnd = (oldIndex, newIndex) =>
    setFiles(arrayMoveImmutable(files, oldIndex, newIndex));

    const doMerge = ()=>{
        if(files.length < 1){
            setNotify(true);
            return;
        }
        setMerge(true);
    }

    const reMerge = ()=>{
        setMerge(false);
        setFiles([]);
    }

    const okNot = ()=>{
        setNotify(false);
    }

    const onDocumentLoadSuccess = ( numPages )=>{
        setNumPages(numPages["file"]);
    }
    
    return(
        <section className="w-full min-h-screen">
            <div className='w-full h-[150px]'></div>
            <form className='min-h-fit p-2  border-2 border-green-800 w-2/3 m-auto rounded-md' onSubmit={onsub}>
                <h2 className='text-center m-2' dir={texts.dir[lang]}>{texts.mergetext[lang]}</h2>
                <div className='flex flex-col justify-center items-center sm:flex-row'>
                    <input className='m-2' name='file' type='file' multiple />
                    <RandSubmit text={texts.addfiles[lang]} />
                </div>
            </form>
            <div className='w-full h-fit '>
                <div className='w-fit h-fit m-auto p-3'>
                    <RandButton fun={doMerge} text={texts.merge[lang]} />
                </div>
            </div>
            
                        {notify? <WarningNotify text={texts.selecttomerge[lang]} ><RandButton text={texts.ok[lang]} fun={okNot} /></WarningNotify>:''}
        </section>
    )
}

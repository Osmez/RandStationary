'use client'

import React, { useContext, useState } from 'react';
import SortableList, { SortableItem } from 'react-easy-sort';
import {arrayMoveImmutable} from "array-move";
import {Merger} from './Merger';
import { RandButton, RandSubmit } from '@/app/ui/randbutton';
import { LanguageContext } from '../../Context/LanguageContext';
import {WarningNotify} from '@/app/ui/Notifications';
import getPDFPageCount from '@/app/pdftools/methods/getPDFPageCount';
import path from 'path';
import texts from '@/app/texts.json';
import FileView from '@/app/pdftools/FileView';
import FileUpload from '@/app/pdftools/FIleUpload';import { PDFIcon } from '../components/icons';
;



export default function MergePDF(){
    const lang = useContext(LanguageContext);
    const [notify, setNotify] = useState(false);
    const [files, setFiles] = useState([]);
    const [merge, setMerge] = useState(false);

    const StartAgain = ()=>{
        setMerge(null);
    }
    const ConfrirmMerge = ()=>{
        if(files.length < 2){
            setNotify(true);
        }else{
            if(!merge){
                setMerge(true);
            }
        }
    } 

    const onSortEnd = (oldIndex, newIndex) =>
    setFiles(arrayMoveImmutable(files, oldIndex, newIndex));

    const onFileChange = async(e) => {
        
        e.preventDefault();
        const temp = [];
        const newFiles = e.target.files;

        for (let i = 0; i < newFiles.length; i++) {
          const file = newFiles[i];
          file.pageCount = await getPDFPageCount(file);
          temp.push(file);
        }
        
        setFiles([...files, ...temp]);

    };

    
    return(
        <section className="w-full min-h-screen">
            <div className='w-full h-[150px]'></div>
            <div dir={texts.dir[lang]} className='w-3/4 min-h-[180px] p-2 m-auto rounded-md bg-stone-700 flex flex-row flex-wrap justify-start'>
                {files.length < 1? <><FileUpload onFileChange={onFileChange} multiple={true} lang={lang} />
                    
                </>:<div className='w-[80px] h-[220px] flex justify-center items-center'><PDFIcon /></div>}
                <div className='flex flex-col justify-center items-center sm:items-start'>
                        <h3 className='text-4xl font-bold'>{texts.mergepdf[lang]}</h3>
                        <h3 className='text-2xl text-center sm:text-start'>{texts.mergetext[lang]}</h3>
                    </div>
            </div>
            {files.length > 1? <div className='w-full min-h-[80px] flex justify-center items-center'><RandButton text={texts.merge[lang]} fun={ConfrirmMerge} /><div className='w-[50px] h-[10px]'></div><RandButton text={texts.clear[lang]} fun={()=>{setFiles([])}} /></div>:''}
            <SortableList
                onSortEnd={onSortEnd}
                className="flex my-4 flex-wrap place-content-center gap-2 md:gap-4"
                draggedItemClassName="opacity-50"
            >
                {
                    files.map(
                        (file, i)=>{
                            return (
                                <SortableItem key={i}>
                                        <div className="cursor-grab select-none">
                                            <FileView file={file} pagec={texts.pagecount[lang]} />
                                        </div>
                                </SortableItem>
                            )
                        }
                    )
                }
            </SortableList>

            {merge? <Merger files={files} reMrg={StartAgain} />:''}
            {notify? <WarningNotify text={texts.selecttomerge[lang]} />:'' }
            </section>
    )
}

/**
 * <form
                className='w-3/4 min-h-[200px] h-fit rounded-md border-2 border-green-600 p-2 m-2 flex flex-row justify-around'
                onSubmit={submitFiles}
            >
                <input name='file' type='file' multiple className='' />
                <RandSubmit />
            </form>
 */
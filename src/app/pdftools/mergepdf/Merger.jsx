import PDFMerger from 'pdf-merger-js/browser';
import React, { useEffect, useState } from 'react';
import {RandButton} from '@/app/ui/randbutton';

// files: Array of PDF File or Blob objects
export const Merger = ({files, reMrg}) => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();

  useEffect(() => {
    const render = async () => {
      const merger = new PDFMerger();

      for(const file of files) {
        await merger.add(file);
      }

      await merger.setMetadata({
        producer: "pdf-merger-js based script"
      });

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);

      return setMergedPdfUrl(url);
    };

    render().catch((err) => {
      throw err;
    });

    () => setMergedPdfUrl({});
  }, [files, setMergedPdfUrl]);

  return !mergedPdfUrl ? (
    <>Loading</>
  ) : (
    <div  className='w-full height-fit flex flex-col justify-center items-center bg-green-950 absolute top-0 m-auto'
    >
      <div className='w-full h-[150px]'></div>
      <RandButton fun={reMrg} text={'start over'} />
      <iframe
      className='mt-2'
      height={1000}
      src={`${mergedPdfUrl}`}
      title='pdf-viewer'
      width='100%s'
    ></iframe>
    </div>
    
  );
};
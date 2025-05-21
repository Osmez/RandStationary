import PageView from '../PageView';
import breakPagesHandler from '../methods/breakPDFPages';
import texts from '@/app/texts.json'

export default function TheBreak({file, pages, lang}){

    return(
        <section className='w-4/5 m-auto min-h-60 rounded-md bg-stone-700 p-4 flex justify-center flex-wrap'>
            {
                pages.map(
                    (f,i)=> <PageView key={i} file={file} pageNumber={i+1} txt={texts.break[lang]} handler={breakPagesHandler}/>
                )
            }
        </section>
    )
}
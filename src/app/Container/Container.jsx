'use client'
import MidConatiner from '../Midconatiner/Midcontainer';
import SectionHeader from '@/app/Home/sectionHeader';
import SectionHeaderAR from '@/app/Home/sectionheaderar';


export default function Container({items, lng, view, font, arfont}){
    
    return(
        <div className='mt-5 mx-5 p-[12px] border-2 border-stone-200  rounded-md w-full dark:border-stone-700'>
            <div className='w-full min-h-14'>
                 {lng == "en"? <SectionHeader text={items.name} font={font} />: <SectionHeaderAR  text={items.name} font={arfont}/>}
            </div>
            
            <div  className='w-full h-fit border-t-2 border-stone-200 dark:border-stone-700'>
                {items.content.map((_item,_id)=>{ 
                    return(
                       <MidConatiner key={_id} items={_item} lng={lng} view={view}  font={font} arfont={arfont} />
                    )
                })}
            </div>
        </div> 
    )
}

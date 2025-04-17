"use client"

import AddOrPlus from './AddOrPlus';
import texts from '@/app/texts.json';
import Image from 'next/image';

export default function HomeCard({item, lng, view, font, arfont}){  

  const fnt = lng == "en"? font : arfont;
  return  (
  <div className='w-[150px] m-2 min-h-[200px] p-2 bg-stone-200 dark:bg-stone-900 rounded-lg flex flex-col border-2 border-stone-600 transition-all hover:scale-125'>
    <button onClick={()=>{view(item);}}>
      <Image src={'/enlarge.png'} className='w-8 h-8 mb-2' width={50} height={50} alt='enlarge icon' />
    </button>
    <div className='w-full  h-32 bg-stone-200 dark:bg-stone-900 rouded-lg text-center'>
      <Image src={`${item.img}`} className='w-auto h-full m-auto' width={100} height={100} alt="item review" />
    </div>
   
    <p className={`my-2 text-center ${fnt}`}> <span>{item.name}</span></p>
    <p className={`my-2 text-center ${fnt}`}>{texts.price[lng]} <span> {item.price}</span></p>
    {item.color? <div className={'my-2 text-center rounded-md w-full min-h-8'} style={{backgroundColor:item.color}}></div>:''} 
   
    <AddOrPlus texts={texts} it={item} lang={lng} />
      
  </div>)
}

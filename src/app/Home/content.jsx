"use client"
import React, { useContext, useEffect, useState } from 'react';
import itms from './content.json';
import Card from './card';
import ContentHeader from './ContentHeader';
import SectionHeader from './sectionHeader';
import SectionHeaderAR from './sectionheaderar'
import { LanguageContext } from '../Context/LanguageContext';


export default function Content(){
   
   const lang = useContext(LanguageContext);
   const the_items = itms[lang];
   
   
   return (
   <section>
      <h2 className='text-center text-[8vw] font-bold after:w-6 after:h-8 after:bg-red-400'>Products</h2>
      <p className='text-center text-[2vw]'>BEST STATIONERY ITEMS FOR KIDS</p>
      
         <section className="w-full px-8 py-4 flex flex-wrap justify-center align-top" dir={`${ lang == 'en'? 'ltl':'rtl'}`}>
      
               
         <div className='w-4/5 min-h-10 h-fit p-2 border rounded-md shadow-xl flex flex-col' >
            { lang == 'en'? <SectionHeader text={'Pens and Pencils'}/>:<SectionHeaderAR text={'أقلام'}/>}
         
            {
               the_items.Pens.Pens.map(
                  (items)=>{
                     return(
                     <>
                        <div className='w-full h-fit p-2'><h2>{items.name}</h2> </div>
                        <div  className='w-full h-fit flex flex-row flex-wrap'>
                           {items.contet.map((_item,id)=>{ 
                              return(
                                 
                                    <Card key={id} item={_item} />
                                 
                              )
                           })}
                        </div>
                     </>
                     )
                  }
               )
            }
            <hr></hr>{
            the_items.Pens.Pencils.map(
                  (items)=>{
                     return(
                     <>
                        <div className='w-full h-fit p-2'><h2>{items.name}</h2> </div>
                        <div  className='w-full h-fit flex flex-row'>
                           {items.content.map((_item,id)=>{ 
                              return(
                                 <Card item={_item} key={id} />
                              )
                           })}
                        </div>
                     </>
                     )
                  }
               )
            }
         </div>
         <div className='w-4/5 min-h-10 h-fit  p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
            
            { lang == 'en'? <SectionHeader text={'Notebooks'}/>:<SectionHeaderAR text={'دفاتر'}/>}
            <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'دفاتر':'Notebooks'}</h2></div>
            
               {
                  the_items.NoteBooks.map((the_item)=>{
                     return(
                        <>
                           <div className='w-full h-fit p-2'><h2></h2>{the_item.name}</div>
                           <div className='w-full h-fit flex flex-row '>
                                 {the_item.content.map((_item,id)=>{
                                    return(
                                       <Card key={id} item={_item} />
                                    )
                                 })}
                           </div>
                        </>
                     )
                  })
               }
            
         </div> 

         <div className='w-4/5 min-h-10 h-fit  p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
         { lang == 'en'? <SectionHeader text={'Colours'}/>:<SectionHeaderAR text={'ألوان'}/>}
            <div className='w-full h-fit flex flex-row flex-wrap'>
            
               {
                  the_items.Colours.Wooden.map((color_item)=>{
                        return(
                           <>
                              <ContentHeader text={color_item.name} />
                              <div className='w-full h-fit p-2'><h2></h2>{color_item.name}</div>
                              {color_item.content.map((_item, id)=>{
                                 return(<Card key={id} item={_item} />)
                              })}
                           </>
                        )
                     }
                  )
               }
               <hr/>
               <div className='w-full h-fit p-2'><h2>PWater Colors</h2> </div>
               {
                  the_items.Colours.WaterColour.map((_item, id)=>{
                        return(
                           <Card key={id} item={_item} />
                        )
                     }
                  )
               }
               <hr/>
               <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'ألوان حجري':'Palette'}</h2> </div>
               {
                  the_items.Colours.Palette.map((_item, id)=>{
                        return(
                           <Card key={id} item={_item} />
                        )
                     }
                  )
               }
            </div>
         </div>

         <div className='w-4/5 min-h-10 h-fit p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
         { lang == 'en'? <SectionHeader text={'Whiteboards tools'}/>:<SectionHeaderAR text={'أدوات السبورة'}/>}
         <hr></hr>
         <ContentHeader text={'Erasers'} />
            <div className='w-full h-fit flex flex-row flex-wrap'>
            {the_items.WhiteBoards.Erasers.map(
               (_item, id)=>{
                  return <Card key={id} item={_item} />
               }
            )}
            </div>
        
         <hr></hr>
         <ContentHeader text={'Markers'} />
            <div className='w-full h-fit flex flex-row flex-wrap'>
            {the_items.WhiteBoards.Markers.map(
               (_item, id)=>{
                  return <Card key={id} item={_item} />
               }
            )}
            </div>
         <ContentHeader text={'Refills'} />
            <div className='w-full h-fit flex flex-row flex-wrap'>
            {the_items.WhiteBoards.Refill.map(
               (_item, id)=>{
                  return <Card key={id} item={_item} />
               }
            )}
            </div>
         </div>

         <div className='w-4/5 min-h-10 h-fit p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
         { lang == 'en'? <SectionHeader text={'Highlighters'}/>:<SectionHeaderAR text={'أقلام تعليم'}/>}
            <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'أقلام تعليم':'Higlighters'}</h2> </div>
             
            <div className='w-full h-fit flex flex-row '>
            {
               the_items.Highlighters.map((_item, id)=>{
                     return(
                      
                           <Card key={id} item={_item.name} />
                       
                     )
                  }
               )
            }
            </div>
         </div>
         </section>
      </section>
   )
}

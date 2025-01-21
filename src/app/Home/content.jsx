"use client"
import React, { useContext, useState } from 'react';
import itms from './content.json';
import {motion} from 'framer-motion';
import Card from './card';
import ContentHeader from './ContentHeader';
import { LanguageContext } from '../Context/LanguageContext';


export default function Content(){
   
   const lang = useContext(LanguageContext);
   

   
   
   return (
   <section>
      <h2 className='text-center text-[8vw] font-bold after:w-6 after:h-8 after:bg-red-400'>Products</h2>
      <p className='text-center text-[2vw]'>BEST STATIONERY ITEMS FOR KIDS</p>
      
         <section className="w-full px-8 py-4 flex flex-wrap justify-center align-top" dir={`${ lang == 'en'? 'ltl':'rtl'}`}>
      
               
         <div className='w-4/5 min-h-10 h-fit bg-slate-200 p-2 border rounded-md shadow-xl flex flex-col' >
            <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'اقلام رصاص وحبر':'Pen and pencils'}</h2> </div>
            {
               itms[lang].Pens.Pens.map(
                  (items,id)=>{
                     return(
                     <div key={id}>
                        <div className='w-full h-fit p-2'><h2>{itms[lang].name}</h2> </div>
                        <div  className='w-full h-fit flex flex-row flex-wrap'>
                           {items.contet.map((content_item,uk)=>{ 
                              return(
                           <div key={uk} className='w-1/4  min-h-10 m-2 p-2 bg-slate-300 flex flex-wrap flex-col'>
                              <div className='w-full h-32 bg-slate-400'></div>
                              <p>{content_item}</p>
                           </div>
                              )
                           })}
                        </div>
                     </div>
                     )
                  }
               )
            }
            <hr></hr>{
            itms[lang].Pens.Pencils.map(
                  (items, id)=>{
                     return(
                     <div key={id}>
                        <div className='w-full h-fit p-2'><h2>{items.name}</h2> </div>
                        <div  className='w-full h-fit flex flex-row'>
                           {items.content.map((content_item,pk)=>{ 
                              return(
                           <div key={pk} className='w-1/4  min-h-10 m-2 p-2 bg-slate-300 flex flex-col'>
                              <div className='w-full h-32 bg-slate-400'></div>
                              <p>{content_item}</p>
                           </div>
                              )
                           })}
                        </div>
                     </div>
                     )
                  }
               )
            }
         </div>
         <div className='w-4/5 min-h-10 h-fit bg-red-300 p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
            <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'دفاتر':'Notebooks'}</h2></div>
            
               {
                  itms[lang].NoteBooks.map((the_item, id)=>{
                     return(
                        <div key={id}>
                           <div className='w-full h-fit p-2'><h2></h2>{the_item.name}</div>
                           <div className='w-full h-fit flex flex-row '>
                                 {the_item.content.map((note_item,id)=>{
                                    return(
                                       <div key={id} className='w-1/4  min-h-10 m-2 p-2 bg-red-400 flex flex-col'>
                                       <div className='w-full h-32 bg-red-400'></div>
                                       <p>{note_item}</p>
                                    </div>
                                    )
                                 })}
                           </div>
                        </div>
                     )
                  })
               }
            
         </div> 

         <div className='w-4/5 min-h-10 h-fit bg-green-300 p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
            <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'ألوان خشبية':'Pencil Colors'}</h2> </div>
            <motion.h3 
               variants={{hide:{transform:'scaleY(0)',left:'200px',transformOrigin:'top'},vis:{transform:['scaleY(0)','scaleY(1)','scale(1)'],left:['200px','200px','0']}}}
               
               className=' inline-block text-[8vw] relative'
               initial="hide"
               whileInView="vis"
               
               transition={{duration:2,delay:0.2,times:[0,0.6,1]}}
            >
            COLOURS
            </motion.h3>
            <div className='w-full h-fit flex flex-row flex-wrap'>
            
               {
                  itms[lang].Colours.Wooden.map((color_item, id)=>{
                        return(
                           <div key="id">
                              <ContentHeader text={color_item.name} />
                              <div className='w-full h-fit p-2'><h2></h2>{color_item.name}</div>
                              {color_item.content.map((color_item_content, id)=>{
                                 return(<Card key={id} name={color_item_content} />)
                              })}
                           </div>
                        )
                     }
                  )
               }
               <hr/>
               <div className='w-full h-fit p-2'><h2>PWater Colors</h2> </div>
               {
                  itms[lang].Colours.WaterColour.map((color_item, id)=>{
                        return(
                           <div key={id}>
                              <ContentHeader text={color_item.name} />
                              <div className='w-full h-fit p-2'><h2></h2>{color_item.name}</div>
                              {color_item.content.map((color_item_content, id)=>{
                                 return(<Card key={id} name={color_item_content} />)
                              })}
                           </div>
                        )
                     }
                  )
               }
               <hr/>
               <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'ألوان حجري':'Palette'}</h2> </div>
               {
                  itms[lang].Colours.Palette.map((color_item, id)=>{
                        return(
                           <div key={id}>
                              <ContentHeader text={color_item.name} />
                              <div className='w-full h-fit p-2'><h2></h2>{color_item.name}</div>
                             
                           </div>
                        )
                     }
                  )
               }
            </div>
         </div>

         <div className='w-4/5 min-h-10 h-fit bg-red-200 p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
            <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'أدوات الوح':'Whiteboard tools'}</h2> </div>
            <div className='w-full h-fit flex flex-row flex-wrap'>
            {
                  itms[lang].WhiteBoards.map((color_item, id)=>{
                        return(
                           <div key={id}>
                              <ContentHeader text={color_item.name} />
                              <div className='w-full h-fit p-2'><h2></h2>{color_item.name}</div>
                              {color_item.content.map((color_item_content, id)=>{
                                 return(<Card key={id} name={color_item_content} />)
                              })}
                           </div>
                        )
                     }
                  )
               }
            </div>
         </div>

         <div className='w-4/5 min-h-10 h-fit bg-red-200 p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
            <div className='w-full h-fit p-2'><h2>Whaite Board Content</h2> </div>
            <div className='w-full h-fit flex flex-row flex-wrap'>
            {
               itms[lang].Highlighters.map((color_item, id)=>{
                     return(
                        <div key={id}>
                           <ContentHeader text={color_item.name} />
                           <div className='w-full h-fit p-2'><h2></h2>{color_item.name}</div>
                           {color_item.content.map((color_item_content, id)=>{
                              return(<Card key={id} name={color_item_content} />)
                           })}
                        </div>
                     )
                  }
               )
            }
            </div>
         </div>

         <div className='w-4/5 min-h-10 h-fit bg-red-200 p-2 mt-4 border rounded-md shadow-xl flex flex-col' >
            <div className='w-full h-fit p-2'><h2>{lang == 'ar'? 'أقلام تعليم':'Higlighters'}</h2> </div>
            <div className='w-full h-fit flex flex-row '>
            {
               itms[lang].Highlighters.map((_item, id)=>{
                     return(
                        
                           <Card key={id} name={_item.name} />
                        
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
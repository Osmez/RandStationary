import Image from "next/image"
import bag from './imgs/bag.png';
import ruler from './imgs/ruler.png';
import books from './imgs/books.png';
import noteb from './imgs/noteb.png';
import calcu from './imgs/calcu.png';
import koos from './imgs/koos.png';
import resh from './imgs/resh.png';
import lamb from './imgs/lamb.png';
import sezor from './imgs/sezor.png';

export default function InfiniteSlider(){
    return <div className="relative w-4/5 m-auto overflow-hidden">
    <div className="animate-infiniteSlider flex w-[calc(250px*10)]">
      
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
            <Image className="w-1/2 h-auto m-auto pt-[15px]" src={bag}></Image>
            </div>
         
        </div>

        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
             <div className="w-1/2 h-1/2 rounded-md bg-white shadow-sm">
             <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={noteb}></Image>
             </div>
        </div>

        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
             <div className="w-1/2 h-1/2 rounded-md bg-white shadow-sm">
             <Image className="w-1/2 h-auto m-auto pt-[15px]" src={koos}></Image>
             </div>
            
        </div>
     
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
           <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={calcu}></Image>
           </div>
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
           <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={books}></Image>
           </div>
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
           <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={lamb}></Image>
           </div>
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
            <Image className="w-1/2 h-auto m-auto pt-[15px]" src={resh}></Image>
            </div>
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
            <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={ruler}></Image>
            </div>
           
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
           <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={sezor}></Image>
           </div>
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
           <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={bag}></Image>
           </div>
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
         <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={noteb}></Image>
         </div>
        </div>
        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
         <Image className="w-1/2 h-auto m-auto pt-[15px]" src={calcu}></Image>
         </div>
        </div>

        <div
          className="slide flex w-[125px] h-[125px] m-2 items-center justify-center ">
            <div className="w-1/2 h-1/2 rounded-md bg-white ">
           <Image  className="w-1/2 h-auto m-auto pt-[15px]" src={koos}></Image>
           </div>
        </div>
     
    </div>
  </div>
}


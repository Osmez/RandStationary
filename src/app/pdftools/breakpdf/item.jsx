'use client'
import {RandCustomButton} from '../../ui/randbutton';

export default function PDFItem({children, PDF, viewPDF}){

    const SAV = ()=>{
        viewPDF(PDF, 'save');
    }

    const TAB = ()=>{
        viewPDF(PDF, 'tab');
    }

    return(
        <div>
            {children}
            <div className="w-full flex flex-row justify-around items-center">
                <RandCustomButton fun={TAB}  text={'Open'} wid={'30%'} hei={'auto'}/>
                <RandCustomButton fun={SAV}  text={'Save'} wid={'30%'} hei={'auto'}/>
            </div>
           
        </div>
    )
}
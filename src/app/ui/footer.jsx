import { Ubuntu, Mada , Lalezar} from 'next/font/google';

const ub = Ubuntu({
    weight: '400',
    subsets: ['latin']
  });

  const lali = Lalezar({
    weight: '400',
    subsets: ['arabic']
  });
  
  
  const mad = Mada({
    weight: '400',
    subsets: ['arabic']
  });

export default function RandFooter({lng}){
    return <footer className="w-full h-fit p-2 bg-slate-100 dark:bg-stone-800 border-t-2 border-stone-700 mt-6">
        {lng == "en"?
            <>
                <h2 style={{fontWeight:900}} className={`w-full text-center text-[50px] `}>Rand <br/> Stationery</h2>
                <h2 className={`text-center  bg-slate-200 dark:bg-stone-900 rounded-md p-2`}>Created By Osama Namur</h2>
                <h2 className={`text-center  bg-slate-200 dark:bg-stone-900 rounded-md p-2`}>Copy Rights &#169; Osama Namur</h2>

            </>
            :
            <>
                <h2 style={{fontWeight:500}} className={`w-full text-center  text-[100px] `}>مكتبة  رند </h2>
                <h2 className={`text-center bg-slate-200 dark:bg-stone-900 ${mad.className} p-2 rounded-md`}>أنشئ بواسطة أسامة نمور</h2>
                <h2 className={`text-center bg-slate-200 dark:bg-stone-900 ${mad.className} p-2 rounded-md`}>جميع الحقوق محفوظة &#169; أسامة نمور</h2>

            </>
            
        }
        

    </footer>
}
import HomeCard from '../Cards/HomeCard';

export default function MidContainer({items, lng, view, font, arfont}){
    return  <>
    
    <div  className='w-full h-fit px-[18px] flex flex-row flex-wrap sm:justify-center lg:justify-start border-t-2 border-stone-200 dark:border-stone-700'>
    <h3 className={`w-full px-[18px] text-2xl dark:text-stone-200 ${lng == "en"? font:arfont}`}>{items.name}</h3>
    
        {items.content.map((_item, _id) =>{
            return  (
                <HomeCard key={_id} item={_item} lng={lng} view={view} font={font} arfont={arfont}/>
            ) 
            }
        )}
    </div>
    </>
}
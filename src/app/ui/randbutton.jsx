'use client'
export const RandButton = ({fun, text})=>{
    return(
        <button type="button" onClick={fun} className="p-3 bg-green-800 rounded-md text-white dark:text-black">{text}</button>
    )
}

export const RandSubmit = ({text})=>{
    return(
        <button type="submit" className="p-3 bg-green-800 rounded-md text-white dark:text-black">{text}</button>
    )
}

export const RandCustomButton = ({text, fun, wid, hei})=>{
    return(
        <button type="button" onClick={fun} className="inline-block p-2 rounded-md bg-green-800 text-white dark:text-black" style={{width: wid,height: hei}}>{text}</button>
    )
}

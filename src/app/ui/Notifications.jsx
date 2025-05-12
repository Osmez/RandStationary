
export function NotificationMessage({state,message,dire}){
    return(
        <div className={`p-2 my-2 rounded-md ${state == 'success'? 'bg-green-600':'bg-red-600'}`}>
            <h5 className="text-white" dir={dire}>{message}</h5>
        </div>
    )
}

export function WarningNotify({children,text}){
    return(
        <div className="w-[250px] h-[220px] fixed left-1/2 -translate-x-1/2 top-32 rounded-md bg-stone-200 dark:bg-stone-700 p-2 flex flex-col justify-center items-center">
            <h3 className="text-black dark:text-white my-3">{text}</h3>
            {children}
        </div>
    )
}
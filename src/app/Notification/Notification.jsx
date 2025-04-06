
export default function Notification({message}){
    return (
        <div className={`w-full p-2 text-center ${message == 'sucess'? 'bg-green-500':'bg-red-500'} rounded-md`}>
            {message}
        </div>
    )
}
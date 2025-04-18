
export default function BillItem({item, thename, price, amount}){
    return(
        <div className='border-2 border-stone-800 p-2 mb-2 rounded-md'>
            <span>{thename}:{item.name}</span>
            <br></br>
            <span>{price}:{item.price}</span>
            <br></br>
            <span>{amount}:{item.amount}</span>
        </div>
    )
}
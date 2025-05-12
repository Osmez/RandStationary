
export default function CartItem({name, amount, dir, price}){
    return  <div  className={`p-2 mb-2 rounded-md dark:bg-stone-800 ${dir}`}>
                {name}|<span className='mx-2'></span>{amount} <span className='mx-2'></span>: {price}
            </div>
}
import texts from '@/app/texts.json';

export default function CartItem({name, amount, total, lang, price}){
    return <div  className={`p-2 mb-2 rounded-md dark:bg-stone-800 ${texts.textdir[lang]}`}>{name}|{amount} {total}: {price}</div>
}
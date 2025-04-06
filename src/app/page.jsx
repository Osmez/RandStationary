"use client"

import Layout from "./Home/Rlayout";
import RandHeader from './Home/rand-header';
import Content from './Home/content';
import { Ubuntu, Lalezar, Mada } from 'next/font/google';
import { useEffect , useState , useContext } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from './Context/LanguageContext';

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

export default function Home() {

  const lang = useContext(LanguageContext);

  const [isVisible, setIsVisible] = useState(true);
  const path = useRouter.name;
  
  useEffect(()=>{
    setIsVisible(false);

    return ()=>{setIsVisible(true),console.log('exit')};
  },[isVisible,path])

  return (
    <Layout>

      <RandHeader lng={lang} ub={ub} lali={lali} mad={mad}></RandHeader>
      <Content lng={lang} ub={ub} lali={lali} mad={mad}/>
      
    </Layout>
   
  );
}

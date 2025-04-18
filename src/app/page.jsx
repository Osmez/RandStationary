"use client"

import Layout from "./Home/Rlayout";
import RandHeader from './Home/rand-header';
import Content from './Home/content';
import { Ubuntu, Lalezar, Mada } from 'next/font/google';
import { LanguageContext } from './Context/LanguageContext';
import { useContext } from 'react';

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


  return (
    <Layout>
      <RandHeader lng={lang} ub={ub} lali={lali} mad={mad}></RandHeader>
      <Content lng={lang} ub={ub} lali={lali} mad={mad}/>
    </Layout>
  );
}

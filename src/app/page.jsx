"use client"
import Layout from "./Home/Rlayout";
import RandHeader from './Home/rand-header';
import Content from './Home/content';


export default function Home() {
  return (
    <Layout>
      <RandHeader></RandHeader>
      <Content />

    </Layout>
   
  );
}

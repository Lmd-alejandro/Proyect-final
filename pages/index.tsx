import Header from '@/Components/Header';
import Main from '@/Components/Main';
import Firstdescription from '@/Components/Fdescription';
import Seconddescription from '@/Components/Sdescription';
import Quote from '@/Components/quote';
import Card from '@/Components/card';
import FAQ from '@/Components/faq';
import FreeTrial from '@/Components/freetrial';
import Navbar from '@/Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Firstdescription />
      <Seconddescription />
      <Quote />
      <Card />
      <FAQ />
      <FreeTrial />
      <Navbar />
    </>
  );
}


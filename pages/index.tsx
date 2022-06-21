import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos'
import Navbar from '../components/organisms/General/Navbar';
import MainBanner from '../components/organisms/Dashboard/MainBanner';
import TransactionStep from '../components/organisms/Dashboard/TransactionStep';
import FeaturedGame from '../components/organisms/Dashboard/FeaturedGame';
import Reached from '../components/organisms/Dashboard/Reached';
import Story from '../components/organisms/Dashboard/Story';
import Footer from '../components/organisms/General/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (  
    <>
      <Navbar />

      <MainBanner />

      <TransactionStep />

      <FeaturedGame />

      <Reached />

      <Story />

      <Footer />
    </>
  )
}

export default Home

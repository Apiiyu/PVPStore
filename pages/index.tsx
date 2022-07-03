import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos'
import Navbar from 'components/organisms/General/Navbar';
import MainBanner from 'components/organisms/Dashboard/MainBanner';
import TransactionStep from 'components/organisms/Dashboard/TransactionStep';
import FeaturedGame from 'components/organisms/Dashboard/FeaturedGame';
import Reached from 'components/organisms/Dashboard/Reached';
import Story from 'components/organisms/Dashboard/Story';
import Footer from 'components/organisms/General/Footer';
import Head from 'next/head';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (  
    <>
      {/* --> Basic SEO Next.js */}
      <Head>
        <title>PVPStore - Best Platform to Top Up Your Game</title>
        <meta name="description" content="Easiest way for top up voucher your game" />
        <meta property='og:title' content='PVPStore - Best Platform to Top Up Your Game'/>
        <meta property='og:description' content='Easiest way for top up voucher your game'/>
        <meta property='og:image' content='https://www.buildwithangga.com/storage/assets/images/tools/Logo%20Framer.jpg'/>
        <meta property='og:url' content='https://www.pvpstore.vercel.com'/>
      </Head>    
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

import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HotDeals from './components/HotDeals';
import Review from './components/Review';
import Footer from './components/Footer';
import Services from './components/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HotDeals/>
      <Services/>
      <Review/>
      <Footer/>
    </>
  );
}

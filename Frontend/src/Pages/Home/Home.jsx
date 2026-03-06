import React from 'react'
import Testimonials from '../../Components/Testimonial/Testimonial';
import HomeComponent from '../../Components/HomeComponent/HomeComponent';
import HomeSecondCompo from '../../Components/HomeSecondCompo/HomeSecondCompo';
import About from '../../Components/About/About';

const Home = () => {
  return (
    <>
      <HomeComponent/>
      <HomeSecondCompo/>
      <About/>
      <Testimonials/>
    </>
  )
}

export default Home

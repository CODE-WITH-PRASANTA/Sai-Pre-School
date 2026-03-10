import React from "react";
import Testimonials from "../../Components/Testimonial/Testimonial";
import HomeComponent from "../../Components/HomeComponent/HomeComponent";
import HomeSecondCompo from "../../Components/HomeSecondCompo/HomeSecondCompo";
import About from "../../Components/About/About";
import Classes from "../Classes/Classes";
import Events from "../Events/Events";
import Teacher from "../Teacher/Teacher";
import OurGallery from "../OurGallery/OurGallery";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <>
      <div id="home">
        <HomeComponent />
      </div>

      <HomeSecondCompo />

      
      <div id="about">
        <About />
      </div>
     
      <div id="teachers">
        <Teacher/>
      </div>

      <div id="classes">
        <Classes/>
      </div>

      <div id="events">
        <Events/>
      </div>

      <div id="gallery">
        <OurGallery/>
      </div>

       <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact/>
      </div>

    </>
  );
};

export default Home;

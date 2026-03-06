import React from "react";
import Testimonials from "../../Components/Testimonial/Testimonial";
import HomeComponent from "../../Components/HomeComponent/HomeComponent";
import HomeSecondCompo from "../../Components/HomeSecondCompo/HomeSecondCompo";
import About from "../../Components/About/About";
import Classes from "../Classes/Classes";
import Events from "../Events/Events";

const Home = () => {
  return (
    <>
      <HomeComponent />
      <HomeSecondCompo />
      <div id="about">
        <About />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;

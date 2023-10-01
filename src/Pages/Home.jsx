import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutFirm from "../components/AboutFirm/AboutFirm";
import PracticeArea from "../components/PracticeArea/PracticeArea";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonials/Testimonial";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return( 
  <div >
    <Navbar/>
    <Hero/>
    <AboutFirm/>
    <PracticeArea/>
    <Team/>
    <Testimonial/>
    <Footer/>
    </div>
    )
};

export default Home;

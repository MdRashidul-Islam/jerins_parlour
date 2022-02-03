import React from "react";

import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import DisplayService from "./Service/DisplayService";
import ScreenProfessionally from "./ShowScreenProfessionally/ScreenProfessionally";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />

      <DisplayService />

      <ScreenProfessionally />

      <Testimonial />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;

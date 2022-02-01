import React from "react";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Service from "./Service/Service";
import ScreenProfessionally from "./ShowScreenProfessionally/ScreenProfessionally";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <ScreenProfessionally />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

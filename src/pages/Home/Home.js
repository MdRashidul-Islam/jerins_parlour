import React from "react";

import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import DisplayService from "./Service/DisplayService";
import ScreenProfessionally from "./ShowScreenProfessionally/ScreenProfessionally";
import Testimonial from "./Testimonial/Testimonial";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Test from "./Test";

const Home = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      fontSize: 12,
      h6: {
        lineHeight: 1.6,
        fontWeight: 600,
      },
    },
  });

  return (
    <div>
      <Header />
      <DisplayService />
      {/* <Test /> */}

      <ScreenProfessionally />

      <Testimonial />

      <Contact />
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer";
import * as classes from "./Homepage.module.css";
import MainSlider from "../../components/MainSlider";
import Trending from "../../components/Trending";
import Technologies from "../../components/Technologies";
import Insight from "../../components/Insight";
import InfinitySliderContainer from "../../components/InfinitySliderContainers";
import OurClients from "../../components/OurClient/OurClients";
import Testimonials from "../../components/Testimonials";
import OurPresence from "../../components/OurPresence";

const Homepage = () => {
  const mainRef = React.useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  /**
   * @description Getting Scroll Poition
   * @param {object} event
   */
  const handleScroll = () => {
    const position = window.pageYOffset; // if not work use-- window.pageYOffset
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  localStorage.setItem("scrollPosition", scrollPosition);

  return (
    <Box className={classes["homepage-container"]} ref={mainRef}>
      <MainSlider scrollPosition={scrollPosition} />
      <Trending />
      <Insight />
      <Technologies />
      <InfinitySliderContainer />
      <OurPresence />
      <Testimonials />
      <OurClients />
      <Footer />
    </Box>
  );
};

export default Homepage;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer";
import * as classes from "./Homepage.module.css";
import MainSlider from "../../components/MainSlider";
import Trending from "../../components/Trending";
import Technologies from "../../components/Technologies";
import WorldMapWithIndia from "../../components/WorldMapWithIndia";

import OurClients from "../../components/OurClient/OurClients";
import InfinitySlider from "../../components/InfinitySlider";
import InfinitySliderContainer from "../../components/InfinitySliderContainers";
import CustomPopOver from "../../components/CustomPopOver";

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
      <Technologies />
      <WorldMapWithIndia />
      <CustomPopOver />
      <OurClients />
      {/* <InfinitySlider /> */}
      <InfinitySliderContainer />
      {/* <Insight />
     
     
      <OurPresence />
      <Testimonials />
    */}
      <Footer />
    </Box>
  );
};

export default Homepage;

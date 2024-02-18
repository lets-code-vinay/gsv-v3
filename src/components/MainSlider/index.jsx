import React, { memo, useState } from "react";

import { number } from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import * as classes from "./style.module.css";

import ActiveProgress from "./ActiveProgress";
import StructuredNavbar from "../StructuredNavbar";
import { MAIN_SLIDER_DATA } from "../../configs/MainSlider";

const MainSlider = ({ scrollPosition }) => {
  const [currentSlideData, setCurrentSlideData] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  /**
   * @description Setting up slider data
   *
   * @param {Number} currentSlide
   * @param {Object} Keys
   */
  const setMovieKey = (currentSlide, { key }) => {
    setActiveSlide(key * 10);
    setCurrentSlideData(Object.values(MAIN_SLIDER_DATA)[currentSlide || 0]);
  };

  /**
   * @description Change active slide on click indicators
   *
   * @param {Number} updateSlide
   */
  const setActiveSlider = (updateSlide) => {
    setActiveSlide(updateSlide);
    setCurrentSlideData(Object.values(MAIN_SLIDER_DATA)[updateSlide || 0]);
  };

  const { bg_color = "", heading = "", subtitle = "" } = currentSlideData || {};

  return (
    <div className={classes["main-screen"]}>
      <main style={{ position: "relative" }}>
        <Carousel
          onChange={setMovieKey}
          showThumbs={false}
          emulateTouch={true}
          dynamicHeight={true}
          autoPlay={true}
          autoFocus={true}
          showArrows={true}
          infiniteLoop={true}
          stopOnHover={false}
          swipeable={true}
          swipeScrollTolerance={10}
          useKeyboardArrows={true}
          transitionTime="1000"
          interval="5900"
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className={classes["image-slider"]}
            />
          </div>
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className={classes["image-slider"]}
            />
          </div>
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className={classes["image-slider"]}
            />
          </div>
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className={classes["image-slider"]}
            />
          </div>
        </Carousel>

        {/* <StructuredNavbar scrollPosition={scrollPosition} /> */}

        <Typography
          variant={"body1"}
          className={classes["sliderInformationBarTitle"]}
        >
          {heading || MAIN_SLIDER_DATA.slider_1.heading}
        </Typography>

        <Box className={classes["progressBars"]}>
          {Object.values(MAIN_SLIDER_DATA).map(({ title = "" }, index) => {
            return (
              <ActiveProgress
                progressName={title}
                progressCount={MAIN_SLIDER_DATA.length}
                key={`${title}-${index}`}
                activeSlide={activeSlide}
                index={index}
                onChangeSlide={setActiveSlider}
              />
            );
          })}
        </Box>

        <Box className={`${classes["infoBlock"]} block`}>
          <Box className={classes["informationBar"]}>
            <Box
              className={classes["informationMsgContainer"]}
              style={{
                backgroundColor: bg_color || MAIN_SLIDER_DATA.slider_1.bg_color,
              }}
            >
              <Typography variant="body1" className={classes["informationMSG"]}>
                {subtitle || MAIN_SLIDER_DATA.slider_1.subtitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
};

/**
 * @description Prop validation
 */
MainSlider.propTypes = {
  scrollPosition: number,
};

/**
 * @description default Prop
 */
MainSlider.defaulProps = {
  scrollPosition: 0,
};

export default memo(MainSlider);

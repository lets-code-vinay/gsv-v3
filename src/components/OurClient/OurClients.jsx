import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import "slick-carousel/slick/slick.css";
import * as classes from "./style.module.css";
import { IMAGES } from "../../configs/Images";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const OurClients = () => {
  const settings = {
    className: "center",
    centerMode: !true,
    infinite: true,
    centerPadding: "5%",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: !true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: !true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      //  needs this code for responsive in future-------
      {
        breakpoint: 420,
        settings: {
          className: "upto420",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className={`${classes["topContainer"]} container`}>
      <Box className={classes["clientsTitle"]}>
        <Typography variant="h4" className={classes["ourClientsText"]}>
          Our Clients
        </Typography>
      </Box>

      <Slider className={classes["clientSlider"]} {...settings}>
        {IMAGES.map(({ image = "", alt = "" }, index) => {
          return index % 2 !== 0 ? (
            <div key={index}>
              <img
                src={image}
                className={classes["imageToResponsive"]}
                alt={alt}
                key={index}
              />
            </div>
          ) : (
            <div key={index}>
              <img
                src={IMAGES[IMAGES.length - (index + 1)]?.image}
                className={`${classes["imageToResponsive"]} 
                  bottomImage`}
                alt={alt}
                key={index}
              />
            </div>
          );
        })}
      </Slider>
    </Box>
  );
};

export default OurClients;

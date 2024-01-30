import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import * as classes from "./style.module.css";
import "slick-carousel/slick/slick.css";
import { Typography } from "@mui/material";
import { responsive_client, responsive_slider } from "./configs";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { TESTIMONIAL_CARD_DATA } from "../../configs/TestimonialsCard";

const Testimonials = () => {
  const [testimonialArr] = useState(Object.values(TESTIMONIAL_CARD_DATA));

  const [activeSlide, setActiveSlide] = useState(0);
  const [testimonialClient, setTestimonialClient] = useState({});
  const [clientCount, setClientCount] = useState(3);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [testimonialCArdData, setTestimonialCardData] = useState({
    clientCount: 0,
    about: "",
    author: "",
    designation: "",
    company: "",
    image: "",
    value: "",
  });

  const [openTestimonial, setOpenTestimonial] = useState(false);

  useEffect(() => {
    setTestimonialClient(
      TESTIMONIAL_CARD_DATA[testimonialArr[activeSlide].value].testimonials
    );

    const clientCounts = Object.values(
      TESTIMONIAL_CARD_DATA[testimonialArr[activeSlide].value].testimonials
    ).filter(({ about }) => about.length > 0 && about);

    setClientCount(clientCounts.length);
  }, [activeSlide, testimonialArr]);

  /**
   * @description getting index on click on any client
   *
   * @param {Number} index
   * @returns
   */
  const handleCurrentSlide = (index) => () => {
    setActiveSlide(index);
  };

  /**
   * @description Open Popup to read large testimonial to read more
   */
  const handleReadTestimonial =
    (clientCount, about, author, designation, company, image, value) =>
    (event) => {
      setAnchorEl(event.currentTarget);
      setOpenTestimonial(true);
      setTestimonialCardData({
        ...testimonialCArdData,
        clientCount: clientCount,
        about: about,
        author: author,
        designation: designation,
        company: company,
        image: image,
        value: value,
      });
    };

  /**
   * @description Close Popup
   */
  const handleClose = () => {
    setOpenTestimonial(!openTestimonial);
  };

  return (
    <>
      <Box className={classes["testimonials"]}>
        <Box className={classes["testimonialLogo"]}>
          <Typography variant="h4" className={classes["testimonialTitle"]}>
            What our customers are saying
          </Typography>
        </Box>

        <Box className={classes["container-fluid containerClass"]}>
          <Slider
            className={classes["sliderPadding"]}
            afterChange={(current, next) => {
              setActiveSlide(current);
            }}
            infinite={true}
            slidesToShow={5}
            slidesToScroll={1}
            centerMode={true}
            nextArrow={
              <ArrowBackIosIcon
                className={classes["rightArrow"]}
                onClick={handleClose}
              />
            }
            prevArrow={
              <ArrowForwardIosIcon
                className={classes["leftArrow"]}
                onClick={handleClose}
              />
            }
            responsive={responsive_slider}
          >
            {testimonialArr.map(({ value = "", label = "" }, index) => {
              return (
                <Box key={`${value}-${index}`}>
                  <Typography
                    variant="h6"
                    className={classes["clientTitle"]}
                    onClick={handleCurrentSlide(index)}
                    style={{
                      background: activeSlide === index && "#EDEDED",
                      // textDecoration:
                      //   activeSlide === index && "underline solid #000000 70%",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              );
            })}
          </Slider>

          {/* --- second slider------- */}
          {clientCount >= 3 ? (
            <Box className={classes["testimonialDomainClientsSection"]}>
              <Slider
                className={classes["testimonialDomainClients"]}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                slidesToScroll={1}
                infinite={true}
                initialSlide={2}
                nextArrow={
                  <ArrowBackIosIcon
                    className={classes["arrowRightClient"]}
                    onClick={handleClose}
                  />
                }
                prevArrow={
                  <ArrowForwardIosIcon
                    className={classes["arrowLeftClient"]}
                    onClick={handleClose}
                  />
                }
                responsive={responsive_client}
              >
                {Object.values(testimonialClient).map(
                  (
                    {
                      value = "",
                      about = "",
                      author = "",
                      image = "",
                      designation = "",
                      company = "",
                    },
                    index
                  ) => {
                    if (about.length < 1) return true;
                    return (
                      <Box
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        key={`${value}-${index}`}
                        className={classes["clientGrid"]}
                        onMouseEnter={handleReadTestimonial(
                          clientCount,
                          about,
                          author,
                          designation,
                          company,
                          image,
                          value
                        )}
                        onMouseLeave={handleClose}
                      >
                        <Box
                          className={classes["clientCard"]}
                          style={{
                            maxWidth:
                              clientCount >= 1 && clientCount < 3
                                ? "60%"
                                : "75%",
                          }}
                        >
                          <img
                            className={classes["testimonialImage"]}
                            src={image}
                            alt={value}
                          />
                          <Typography
                            variant="h5"
                            className={classes["testimonialCardMatter"]}
                          >
                            "{about}"
                          </Typography>
                          <Typography
                            variant="body1"
                            className={classes["testimonialCardUser"]}
                          >
                            <strong>{author},</strong> {designation}-{company}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Slider>
            </Box>
          ) : (
            <Box
              className={classes["testimonialDomainClientsSectionLessThan3"]}
            >
              {Object.values(testimonialClient).map(
                (
                  {
                    value = "",
                    about = "",
                    author = "",
                    image = "",
                    designation = "",
                    company = "",
                  },
                  index
                ) => {
                  if (about.length < 1) return true;
                  return (
                    <Box
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      key={`${value}-${index}`}
                      className={classes["clientGridLessThan3"]}
                      onMouseEnter={handleReadTestimonial(
                        clientCount,
                        about,
                        author,
                        designation,
                        company,
                        image,
                        value
                      )}
                      onMouseLeave={handleClose}
                    >
                      <Box
                        className={classes["clientCardLessThan3"]}
                        style={{
                          maxWidth:
                            clientCount >= 1 && clientCount < 3 ? "60%" : "75%",
                        }}
                      >
                        <Box className={classes["lessThan3LogoContainer"]}>
                          <img
                            className={classes["testimonialImageLessThan3"]}
                            src={image}
                            alt={value}
                          />
                        </Box>
                        <Typography
                          variant="body1"
                          className={classes["testimonialCardMatterLessThan3"]}
                        >
                          "{about}"
                        </Typography>
                        <Typography
                          variant="body1"
                          className={classes["testimonialCardUserLessThan3"]}
                        >
                          <strong>{author},</strong> {designation}-{company}
                        </Typography>
                      </Box>
                    </Box>
                  );
                }
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default Testimonials;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./style.css";
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
      <Box className="testimonials">
        <Box className="testimonialLogo">
          <Typography variant="h2" className="testimonialTitle">
            What our customers are saying
          </Typography>
        </Box>

        <Box className="container-fluid containerClass">
          <Slider
            className="sliderPadding"
            afterChange={(current, next) => {
              setActiveSlide(current);
            }}
            infinite={true}
            slidesToShow={5}
            slidesToScroll={1}
            centerMode={true}
            nextArrow={
              <ArrowForwardIosIcon
                className="rightArrow"
                onClick={handleClose}
              />
            }
            prevArrow={
              <ArrowBackIosIcon className="leftArrow" onClick={handleClose} />
            }
            responsive={responsive_slider}
          >
            {testimonialArr.map(({ value = "", label = "" }, index) => {
              return (
                <Box key={`${value}-${index}`}>
                  <Typography
                    variant="h6"
                    className="clientTitle"
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
            <Box className="testimonialDomainClientsSection">
              <Slider
                className="testimonialDomainClients"
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                slidesToScroll={1}
                infinite={true}
                initialSlide={2}
                nextArrow={
                  <ArrowForwardIosIcon
                    className="arrowRightClient"
                    onClick={handleClose}
                  />
                }
                prevArrow={
                  <ArrowBackIosIcon
                    className="arrowLeftClient"
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
                        className="clientGrid"
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
                          className="clientCard"
                          style={{
                            maxWidth:
                              clientCount >= 1 && clientCount < 3
                                ? "60%"
                                : "75%",
                          }}
                        >
                          <img
                            className="testimonialImage"
                            src={image}
                            alt={value}
                          />
                          <Typography
                            variant="h5"
                            className="testimonialCardMatter"
                          >
                            "{about}"
                          </Typography>
                          <Typography
                            variant="body1"
                            className="testimonialCardUser"
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
            <Box className="testimonialDomainClientsSectionLessThan3">
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
                      className="clientGridLessThan3"
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
                        className="clientCardLessThan3"
                        style={{
                          maxWidth:
                            clientCount >= 1 && clientCount < 3 ? "60%" : "75%",
                        }}
                      >
                        <Box className="lessThan3LogoContainer">
                          <img
                            className="testimonialImageLessThan3"
                            src={image}
                            alt={value}
                          />
                        </Box>
                        <Typography
                          variant="body1"
                          className="testimonialCardMatterLessThan3"
                        >
                          "{about}"
                        </Typography>
                        <Typography
                          variant="body1"
                          className="testimonialCardUserLessThan3"
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

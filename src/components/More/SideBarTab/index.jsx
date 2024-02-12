import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import "./styles.css";

import Arrow from "../../../assets/icons/arrow.svg";

import ImageText from "./ImageText";
import GridPage from "./GridPage/Index";
import ImageTextList from "./ImageTextList";
import WorldMapWithIndia from "../../WorldMapWithIndia";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { SideMenu } from "../../../configs/More";
import ContactUs from "../../../pages/ContactUs";

const SideBar = (props) => {
  const {
    isMoreOpen = false,
    onMoreClick = () => {},
    onCloseMenus = () => {},
  } = props || {};
  // const scrollPosition = localStorage.getItem("scrollPosition");

  const [showArrow, setShowArrow] = useState("");
  const [optionType, setOptionType] = useState(SideMenu.about_us);

  /**
   * @description Closing menu
   */
  const handleClosePopover = () => {
    onMoreClick({ isMore: false });
  };

  /**
   * @description Showing sidebar arrow on condition basis
   */
  const onShowArrow = (value, menu) => (_) => {
    setShowArrow(value);
    setOptionType(menu);
  };

  /**
   * @description Hiding sidebar arrow on condition basis
   */
  const onHideArrow = (value) => (_) => {
    setShowArrow(value);
  };

  /**
   * @description Showing sidebar pages
   */
  const onClickOption = (menu) => (_) => {
    setOptionType(menu);
  };

  /**
   * @description closing navbar when user scolls
   */
  // if (scrollPosition >= moreRef?.current?.offsetHeight) {
  //   onCloseMenus(false);
  // }

  const closeNavBar = () => {
    onCloseMenus(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClosePopover}>
      {isMoreOpen && (
        <Grid item container spacing={2} className={`more`}>
          <Grid item xs={12} sm={12} md={3} lg={2} className={`sideBar`}>
            <div className={`sideBarMenus`}>
              {Object.values(SideMenu).map((menu, index) => {
                const { label = "", value = "" } = menu || {};

                return (
                  <Box
                    className={`commonClass menuListing`}
                    key={index}
                    onMouseEnter={onShowArrow(value, menu)}
                    onMouseLeave={onHideArrow(value, menu)}
                    onClick={onClickOption(menu)}
                  >
                    <Typography
                      variant={"body"}
                      className={`sideBarOptions border-0 backgroundColorWhite`}
                    >
                      {label}
                    </Typography>
                    <Box className={`arrowBox `}>
                      {Boolean(showArrow) && showArrow === value && (
                        <img
                          src={Arrow}
                          alt="arrow-icon"
                          className={`arrow `}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}

              <Button
                className={`closeNavBarBtn`}
                style={{ backgroundColor: "#0D274D", color: "white" }}
                onClick={closeNavBar}
                endIcon={<HighlightOffIcon />}
              >
                Close
              </Button>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={10}
            style={{
              backgroundColor:
                optionType.type === "map" && optionType.value === "our_presence"
                  ? "#0d274d"
                  : "white",
            }}
          >
            {optionType.type === "image_text" && (
              <ImageText
                title={optionType.title}
                subtitle={optionType.subtitle}
                image={optionType.image}
                alt={optionType.alt}
              />
            )}
            {optionType.type === "grid" && (
              <GridPage title={optionType.title} data={optionType.data} />
            )}
            {optionType.type === "coming_soon" && (
              <GridPage title={optionType.title} />
            )}
            {optionType.type === "map" && (
              // <MapContainer isMapTitleEnable={true} title={optionType.title} /> // deprecated
              <WorldMapWithIndia />
            )}
            {optionType.type === "image_text_list" && (
              <ImageTextList
                title={optionType.title}
                subtitle={optionType.subtitle}
                image={optionType.image}
                alt={optionType.alt}
                listTitle={optionType.listTitle}
                list={optionType.list}
              />
            )}
            {optionType.type === "contact" && (
              <ContactUs
                title={optionType.title}
                subtitle={optionType.subtitle}
                image={optionType.image}
                alt={optionType.alt}
                listTitle={optionType.listTitle}
                list={optionType.list}
                isComponent={true}
              />
            )}
          </Grid>
        </Grid>
      )}
    </ClickAwayListener>
  );
};

export default SideBar;

import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  ClickAwayListener,
  Grid,
  makeStyles,
  Typography,
  Grid
} from "@mui/material";

// import Box from "@mui/material/Box";
// import AppBar from "@mui/material/AppBar";
// import IconButton from "@mui/material/IconButton";
// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";
import "./styles.css";

import Arrow from "../../../../assets/icons/arrow.svg";
// import Arrow from "../../../../../Assets/Icons/arrow.svg";

import { SideMenu } from "../../../../configs/More";
import ImageText from "./ImageText";
import GridPage from "./GridPage/Index";
import ImageTextList from "./ImageTextList";
// import WorldMapWithIndia from "../../../WorldMapWithIndia";
import ContactUs from "../../../Views/ContactUs/index";
// import ContactUs from "../../../../../Views/ContactUs";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const SideBar = (props) => {
  const {
    isMoreOpen = false,
    onMoreClick = () => {},
    onCloseMenus = () => {},
  } = props || {};
  // const scrollPosition = localStorage.getItem("scrollPosition");

  const classes = useStyles();
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
        <Grid item container spacing={2} className={`${classes.more} more`}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={2}
            className={`${classes.sideBar} sideBar`}
          >
            <div className={`${classes.sideBarMenus} sideBarMenus`}>
              {Object.values(SideMenu).map((menu, index) => {
                const { label = "", value = "" } = menu || {};

                return (
                  <Box
                    className={`${classes.menuListing} commonClass menuListing`}
                    key={index}
                    onMouseEnter={onShowArrow(value, menu)}
                    onMouseLeave={onHideArrow(value, menu)}
                    onClick={onClickOption(menu)}
                  >
                    <Typography
                      variant={"body"}
                      className={`${classes.sideBarOptions} sideBarOptions border-0 backgroundColorWhite`}
                    >
                      {label}
                    </Typography>
                    <Box className={`${classes.arrowBox} arrowBox `}>
                      {Boolean(showArrow) && showArrow === value && (
                        <img
                          src={Arrow}
                          alt="arrow-icon"
                          className={`${classes.arrow} arrow `}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}

              <Button
                className={`${classes.closeNavBarBtn} closeNavBarBtn`}
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
              // <WorldMapWithIndia />
              'Loading...'
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

const useStyles = makeStyles((theme) => ({
  sideBar: {
    backgroundColor: "white",
  },
  menuListing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  sideBarOptions: {
    display: "flex",
    justifyContent: "flex-start",
  },
  arrowBox: {},
  mapBox: {
    backgroundColor: "#002446",
    width: "100%",
    height: "100%",
  },
}));

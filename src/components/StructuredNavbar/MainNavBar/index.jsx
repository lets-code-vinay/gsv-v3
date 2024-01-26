import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { bool, func, number } from "prop-types";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

// import MobileNavBar from "../MobileNavBar";
import Logo from "../../../assets/logos/white-logo.png";
import { NAVBAR_MENUS } from "../../../configs/NavBar/navbar";

import * as classes from "./MainNavBar.module.css";

const MainNavBar = ({
  onSubNavbarOpen,
  onMoreOpen,
  setActive,
  isActive,
  onNavMenus,
  isSubSectionOpen,
  isMoreOpen,
  nodeRef,
  scrollPosition,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileNavbarOpened, setMobileNavbarOpen] = useState(false);

  /**
   * @description: Handle mobile menus on icon click
   *
   * @param {Object} event
   */
  const handleMobileMenuOpen = (_) => {
    setMobileNavbarOpen(true);
  };

  /**
   * @description: Closing mobile menus
   */
  const handleMobileMenuClose = () => {
    setMobileNavbarOpen(false);
  };

  const handleMainNavbarClick = (menu) => (event) => {
    navigate("/");
    onMoreOpen({ isMore: menu?.isMore });

    onSubNavbarOpen({
      isOpen: true,
      menu,
      event,
    });
    setActive(menu);
    onNavMenus(Object.values(menu?.menus)[0]);
  };

  /**
   * @description navigate to homepage
   */
  const redirectToHomepage = () => {
    navigate("/");
  };

  // --- Desktop Section ---
  return (
    <div className={classes["Navbar"]} id="home" ref={nodeRef}>
      <AppBar
        position="static"
        className={classes["grow"]}
        elevation={0}
        style={{
          backgroundColor:
            location.pathname.length > 1 ||
            scrollPosition > 200 ||
            isSubSectionOpen ||
            isMoreOpen
              ? "#0D274D"
              : "transparent",
          boxShadow:
            (scrollPosition > 900 || isSubSectionOpen || isMoreOpen) &&
            "1px 1px 14px 1px #66cff5",
        }}
      >
        <Toolbar className={classes["appBarChild"]}>
          <IconButton
            className={classes["sectionMobile"]}
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MenuIcon className={classes["hamburgerIcon"]} />
          </IconButton>
          <Box edge="start" className={classes["menuButton"]} color="inherit">
            <img
              src={Logo}
              alt="main-logo"
              className={classes["logo1"]}
              onClick={redirectToHomepage}
            />
            <div className={classes["sectionDesktop"]}>
              {Object.values(NAVBAR_MENUS).map((menu, i) => {
                return (
                  <MenuItem
                    onClick={handleMainNavbarClick(menu)}
                    style={{
                      borderBottom:
                        isSubSectionOpen && isActive.value === menu.value
                          ? "3px solid #ffff"
                          : "3px solid transparent",
                    }}
                    key={i + "-" + menu.value}
                    className={classes["sectionDesktopMenus"]}
                  >
                    <Typography
                      variant={"body1"}
                      className={classes["navbar_text"]}
                    >
                      {menu.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </div>
          </Box>
          <Box className="nav-bar-grow"></Box>
          <Box className="nav-bar-icons">
            <SearchIcon className="search" />
            <AccountCircleOutlinedIcon className="profile" />
            <LanguageIcon className="globe" />
          </Box>

          {/* To open icons */}
          {/* <MobileNavBar
            isMobileNavbarOpened={isMobileNavbarOpened}
            onCloseMobileMenu={handleMobileMenuClose}
          /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

/**
 * Props validation
 */
MainNavBar.propsType = {
  onSubNavbarOpen: func.isRequired,
  onNavMenus: func,
  isSubSectionOpen: bool,
  scrollPosition: number,
};

/**
 *  Default Props
 */
MainNavBar.defaultProps = {
  onSubNavbarOpen: () => {},
  onNavMenus: () => {},
  isSubSectionOpen: false,
  scrollPosition: 0,
};

export default MainNavBar;

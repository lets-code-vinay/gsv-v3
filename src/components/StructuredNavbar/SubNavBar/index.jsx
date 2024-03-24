import React, { useState, memo } from "react";
import { object } from "prop-types";
import ClickAwayListener from "@mui/material/Box";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import * as classes from "./styles.module.css";
import NavbarMenus from "../NavbarMenus";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SubNavBar = ({
  subNavMenus = {},
  onNavMenus,
  isSubNavbarOpened = false,
  setSubNavbarOpen,
  navMenus,
  onCloseSubNavbar,
  nodeRef,
}) => {
  const [menuListing, setMenuListing] = useState({});
  const [value, setValue] = useState(0);
  const [showRoutingPages, setShowRoutingPages] = useState(false)

  /**
   * @description Changing the values on button click
   *
   * @param {Object} _
   * @param {Number} newValue
   */

  const handleChange = (e, newValue) => {
    setShowRoutingPages(false)
    setValue(newValue);
    setMenuListing(Object.values(subNavMenus?.menus)[newValue] || menuListing);
    onNavMenus(Object.values(subNavMenus?.menus)[newValue] || menuListing);
  };

  /**
   * @description Closing sub Nav bar and menus by calling CB
   */
  const handleCloseMenu = (_) => {
    onCloseSubNavbar(true);
  };

  return (
    <ClickAwayListener
      // mouseEvent="onMouseDown" this show error in console
      // touchEvent="onTouchStart"  this show error in console
    // onClickAway={handleClose}
    >
      <Box className={classes["headBar"]} ref={nodeRef}>
        {(!subNavMenus.isMore || isSubNavbarOpened) && (
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            id={subNavMenus?.value}
            className={classes["subMenuBar"]}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              onClick={() => {setShowRoutingPages(false)}}
              aria-label="basic tabs"
              className={classes["subMenuTabContainer"]}
            >
              {Object.values(subNavMenus?.menus).map((menu, index) => {
                return (
                  <Tab
                    label={menu?.label}
                    {...a11yProps({ index })}
                    key={index}
                    className={classes["sub_navbar_text"]}
                  />
                );
              })}
            </Tabs>
          </Box>
        )}

        {/* --- Navbar menus ---- */}
        {isSubNavbarOpened && !subNavMenus.isMore && (
          <NavbarMenus
            navMenus={navMenus}
            onCloseMenu={handleCloseMenu}
            showRoutingPages={showRoutingPages}
            setShowRoutingPages={setShowRoutingPages}
          />
        )}
      </Box>
    </ClickAwayListener>
  );
};

/**
 * Props validation
 */
SubNavBar.propTypes = {
  subNavMenus: object,
};

/**
 * Default Props
 */
SubNavBar.defaultProps = {
  subNavMenus: {},
};

export default memo(SubNavBar);

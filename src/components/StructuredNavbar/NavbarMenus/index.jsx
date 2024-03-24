import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shape } from "prop-types";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { THEME_COLOR } from "../../../configs/Theme";
import * as classes from "./styles.module.css";
const NavbarMenus = (props) => {
  const { navMenus = {}, onCloseMenu, showRoutingPages, setShowRoutingPages } = props
  const navigate = useNavigate();

  const [isPopularEnabled] = useState(
    Object.keys(navMenus?.menus).includes("POPULAR")
  );

  /**
   * @description On Click Get In Touch Button
   */
  const handleGetInTouch = () => {
    navigate("/contact-us");
  };

  /**
   * @description closing navbar
   */
  const closeNavBar = () => {
    onCloseMenu(false);
  };

  /**
   * @description closing navbar when user scolls
   */
  // if (scrollPosition > 100) {
  //   closeNavBar();
  // }
  /**
   * @description Redirecting to respective Routes
   */
  const handleRedirect = (title, subTitle, label, path) => {
    // onCloseMenu(false)
    // console.log('e', menu)
    navigate(path, { state: { title: title, subTitle: subTitle, label: label, } });
    setShowRoutingPages(true)
  };

  return (
    <>
      {
        !showRoutingPages &&
        <Grid container className={classes["subMenu1"]}>
          <Grid item xs={0} sm={0} md={3} lg={3} className={classes["menuImage"]}>
            <Box className={`${classes["imageBlock"]} block`}>
              {/* TODO: Remove comment after finishing, image size 180 x 404 */}
              <img
                src={navMenus?.image || null}
                alt={navMenus?.title}
                className={classes["imageSubMenu"]}
              />
              <Box className={classes["menuInformationBar"]}>
                <Typography
                  variant={"h4"}
                  className={classes["menuInformationBarTitle"]}
                >
                  {navMenus?.title}{" "}
                </Typography>
                <Box
                  className={classes["menuInformationMSGContainer"]}
                  style={{ backgroundColor: navMenus?.color }}
                >
                  <Typography
                    variant="body1"
                    className={classes["menuInformationMSG"]}
                  >
                    {navMenus?.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Button
                className={classes["get-in-touch"]}
                style={{ backgroundColor: navMenus?.color }}
                onClick={handleGetInTouch}
              >
                Get in touch
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={5} lg={5}>
            <ResponsiveMasonry
              className={classes["menuBlock"]}
              menuBlock
              columnsCountBreakPoints={{ 350: 1, 750: 2 }}
            >
              <Masonry gutter="1">
                {Object.values(navMenus?.menus).map(
                  ({ value = "", label = "", menus = {} }, index) => {
                    console.log('test', value, label, menus, navMenus)
                    if (value === "POPULAR") return "";
                    return (
                      <Box
                        key={index}
                        className={classes["MenuTitleContainerBox"]}
                        sx={{ width: "100%" }}
                      >
                        <Box className={classes["MenuTitleContainer"]}>
                          <Typography
                            variant={"h5"}
                            className={classes["mainMenuTitle"]}
                          >
                            {label}
                          </Typography>
                        </Box>

                        {Object.values(menus).map(
                          ({ path = "", value, label }, index) => {
                            console.log('val', value)
                            return (
                              <Typography
                                key={`${value}-${index}`}
                                className={classes["mainMenuText"]}
                                variant={"body1"}
                                sx={{
                                  fontSize: "14px",
                                  padding: "6px 0px",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography
                                  className={classes["mainMenuLink"]}
                                  underline="none"
                                  onClick={(e) => handleRedirect(navMenus?.title,value, label, path)}
                                >
                                  {label}
                                </Typography>
                              </Typography>
                            );
                          }
                        )}
                      </Box>
                    );
                  }
                )}
              </Masonry>
            </ResponsiveMasonry>
          </Grid>

          {isPopularEnabled && (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                className={`${classes["popularBlock"]} block`}
                style={{ backgroundColor: THEME_COLOR.popular_color }}
              >
                {Object.values(navMenus?.menus).map(
                  ({ value = "", label, menus }, index) => {
                    if (value !== "POPULAR") return null;
                    return (
                      <Box key={index}>
                        <Box className={classes["popularTitleContainer"]}>
                          <Typography
                            variant={"h5"}
                            className={classes["popularTitle"]}
                          >
                            {label}
                          </Typography>
                        </Box>
                        <Grid container>
                          {Object.values(menus).map((popMenu, index) => {
                            return (
                              <Grid
                                item
                                sm={12}
                                xs={12}
                                md={6}
                                lg={6}
                                key={index}
                              >
                                <a
                                  href={popMenu.path}
                                  className={classes["popularLink"]}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Typography
                                    className={classes["popularText"]}
                                    variant={"body1"}
                                  >
                                    {popMenu.label}
                                  </Typography>
                                </a>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    );
                  }
                )}

                <Button
                  className={classes["closeNavBarBtn"]}
                  style={{ backgroundColor: navMenus?.color, color: "white" }}
                  onClick={closeNavBar}
                  endIcon={
                    <HighlightOffIcon className={classes["closeNavBarIcon"]} />
                  }
                >
                  Close
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
        // : <LinkPages />
      }

    </>
  );
};

/**
 * Props validation
 */
NavbarMenus.propTypes = {
  navMenus: shape({}),
};

/**
 *  Default Props
 */
NavbarMenus.defaultProps = {
  navMenus: {},
};

export default NavbarMenus;

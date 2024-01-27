import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shape } from "prop-types";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import * as classes from "./styles.module.css";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const NavbarMenus = ({ navMenus = {}, onCloseMenu }) => {
  const navigate = useNavigate();
  // const scrollPosition = localStorage.getItem("scrollPosition");

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

  return (
    <>
      <Grid container className={classes["subMenu1"]}>
        <Grid
          item
          xs={0}
          sm={0}
          md={3}
          lg={3}
          className={`${classes.menuImage} menuImage`}
        >
          <Box className={`${classes.imageBlock} imageBlock block`}>
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
              className="get-in-touch"
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
            columnsCountBreakPoints={{ 350: 1, 750: 2 }}
          >
            <Masonry gutter="1">
              {Object.values(navMenus?.menus).map(
                ({ value = "", label = "", menus = {} }, index) => {
                  if (value === "POPULAR") return "";
                  return (
                    <Box
                      key={index}
                      className={classes["MenuTitleContainerBox"]}
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
                          return (
                            <a
                              href={path}
                              key={`${value}-${index}`}
                              className={classes["mainMenuLink"]}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Typography
                                className={classes["mainMenuText"]}
                                variant={"body1"}
                              >
                                {label}
                              </Typography>
                            </a>
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
            <Box className={`${classes["popularBlock"]} block`}>
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
                              key={`${popMenu.value}-${index}`}
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
                style={{ backgroundColor: navMenus?.color }}
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

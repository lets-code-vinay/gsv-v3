import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../node_modules/react-tabs/style/react-tabs.css";
import "react-tabs/style/react-tabs.css";
import * as classes from "./style.module.css";

import TRENDING_LOGO from "../../assets/icons/trending.svg";

import CustomizedDialogs from "../CustomizedDialogs";
import { TRENDING_CONFIGS } from "../../Configs/Trending";

const Trending = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [dialogMSG, setDialogMSG] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [openLearnMore, setOpenLearnMore] = useState(false);

  /**
   * @description Handling paragraph for trending
   *
   * @param {String} subtitle
   * @param {Boolean} learnMore
   * @returns {String}
   */
  const handleSubTitle = (subtitle, learnMore) => {
    // Uncomment when it is required in future
    // const originalPara = subtitle.split("#ENTER#").map((brk) => {
    //   return <div className="trendingSubTitleForce">{brk}</div>;
    // });

    // Shortening the paragraph
    const shortPara = `${subtitle.split("").splice(0, 300).join("")}...`;

    return subtitle.length > 250
      ? shortPara
      : subtitle.replaceAll("#ENTER#", "");
  };

  /**
   * @description Handle click tab button
   */
  const handleTabClick = () => {};

  /**
   * @description Open dialog to read more
   */
  const handleLearnMore = (title, subtitle) => () => {
    setOpenLearnMore(true);
    setDialogMSG(subtitle);
    setDialogTitle(title);
  };

  /**
   * @description Close dialog
   */
  const handleClose = () => {
    setOpenLearnMore(!openLearnMore);
  };

  return (
    <main className={classes["containerTrending"]}>
      <Box className="container-div">
        <Box className={classes["trendingLogo"]}>
          <img
            src={TRENDING_LOGO}
            alt="Trending logo"
            className={classes["trendingIcon"]}
          />
          <Typography variant={"h2"} className={classes["trendingText"]}>
            Trending
          </Typography>
        </Box>
        <Tabs
          id="controlled-tabs"
          defaultFocus={true}
          selectedTabClassName="underline"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          default={0}
        >
          <TabList className={classes["tabsClass"]}>
            {Object.values(TRENDING_CONFIGS).map((trending, index) => {
              return (
                <Tab key={`${trending}-${index}`} style={{ padding: 0 }}>
                  <Button
                    boxor="outline-primary"
                    disableRipple={true}
                    className={classes["tabButton"]}
                    id="tabButton"
                    onClick={handleTabClick}
                  >
                    {trending.label}
                  </Button>
                  <Box
                    className={classes["borderBottomClass"]}
                    style={{
                      backgroundColor:
                        index === tabIndex ? "#43C6AC" : "transparent",
                    }}
                  ></Box>
                </Tab>
              );
            })}
          </TabList>

          {Object.values(TRENDING_CONFIGS).map(
            ({ label, title, subtitle, icon, link, button }, index) => {
              return (
                <TabPanel
                  key={`${label}-${index}`}
                  className={classes["tabContainer"]}
                >
                  <Grid container className={classes["tabMatter"]}>
                    <Grid
                      item
                      xs={12}
                      sm={5}
                      md={4}
                      lg={4}
                      className={classes["trendingImageGrid"]}
                    >
                      <img
                        src={icon}
                        alt={title}
                        className={`${classes.trendingImage} reciprocate`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7} md={8} lg={8}>
                      <Box className="content">
                        <Typography
                          variant="h2"
                          className={classes["trendingTitle"]}
                          sx={{
                            margin: "5px 0 6%",
                          }}
                        >
                          {title}
                        </Typography>

                        <Typography
                          variant={"body1"}
                          className={classes["trendingSubTitle"]}
                        >
                          {handleSubTitle(subtitle)}
                        </Typography>

                        {link && (
                          <Typography
                            className={`btn btn-outline-primary ${classes["learn-button"]}`}
                            rel="noreferrer"
                            onClick={handleLearnMore(title, subtitle)}
                            onMouseOver={handleLearnMore(title, subtitle)}
                            variant="h5"
                          >
                            Learn More...
                          </Typography>
                        )}

                        {button && (
                          <Button boxor="outline-primary">{button}</Button>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </TabPanel>
              );
            }
          )}
        </Tabs>
      </Box>
      {/* <CustomizedDialogs
        title={dialogTitle}
        open={openLearnMore}
        onClose={handleClose}
        msg={dialogMSG}
      /> */}
    </main>
  );
};

export default Trending;

import React from "react";
import Software_Define_Grid from "../../assets/images/Software_Define_grid.png";
import Security_Img from "../../assets/images/security.png";
import technologyWireImage from "../../assets/images/technology-wire.png";
import { cardBox } from "../../configs/Technologies";

import { Box, Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import * as classes from "./style.module.css";

const Technologies = () => {
  return (
    <main className={classes["technologiesPage"]}>
      <Box className={classes["technologies-container"]}>
        <Box className={classes["technologiesTitle"]}>
          <Typography variant="h4" className={classes["technologiesText"]}>
            Technologies
          </Typography>
        </Box>

        <p className={classes["technologiesSubtitle"]}>
          We provide services belongs to all IT technologies We provide services
          belongs to all IT technologies
        </p>

        <Grid container spacing={0} className={`${classes.grid1} grid1`}>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes["column_first"]}>
              <h3 className={classes["card_header"]}>
                Enterprise Networking and wireless benefits for your
                organization
              </h3>
              <div>
                <h3 className={classes["card_heading"]}>
                  End to End Wired and Wireless Services
                </h3>
              </div>
              <div>
                <h4 className={classes["card_text"]}>
                  With Enterprise Networking & Wireless, connect your employees,
                  customers, and partners across multiple locations and devices,
                  enable seamless communication and data sharing, and leverage
                  cloud-based applications and services to streamline your
                  workflows and improve your efficiency.
                </h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes["wireGridClass"]}>
            <div className={classes["wireImage"]} src={technologyWireImage}>
              <img
                src={technologyWireImage}
                height="100%"
                width="100%"
                className={classes["hoverEffect"]}
                alt="tech"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes["marginTop"]}>
          <Grid item xs={12} sm={12} md={8} lg={8} className={classes["bck1"]}>
            <Card className={classes["cardMenu"]}>
              <CardContent className={classes["softwareImageOverlay"]}>
                <div
                  className={classes["divImgClass imageLeft"]}
                  src={Software_Define_Grid}
                >
                  <img
                    src={Software_Define_Grid}
                    className={classes["imgTagSoftware"]}
                    alt="tech"
                  />
                </div>
                <h3 className={classes["text"]}>Software-Defined Networking</h3>
                <div className={classes["headingMainDivSoftware"]}>
                  <div className={classes["cardDiv"]}>
                    <h4 className={classes["cardTextHeading"]}>
                      Let us Help you to come in Future of SDN{" "}
                    </h4>
                    <div className={classes["paraText"]}>
                      <p>
                        Software-defined networking (SDN) offers the ability to
                        efficiently control and manipulate network resources in
                        a dynamic and adaptable manner. Through the use of
                        software applications, organizations can configure,
                        monitor, and enhance network performance, security, and
                        dependability.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} className={classes["bck2"]}>
            <Card className={classes["cardMenu"]}>
              <CardContent className="securityOverlay">
                <div
                  className={classes["divImgClassSecurity imageRight"]}
                  src={Security_Img}
                >
                  <img
                    src={Security_Img}
                    className={classes["imgTagSecurity"]}
                    alt="tech"
                  />
                </div>
                <h3 className={classes["textSecurity"]}>Security</h3>
                <div className={classes["headingMainDivSoftware"]}>
                  <h4 className={classes["cardTextHeadingSecurity"]}>
                    Advance Security tactics{" "}
                  </h4>
                  <div className={classes["cardDivSecurity"]}>
                    <div className={classes["paraTextSecurity"]}>
                      <p>
                        If you are looking to safeguard your organization's
                        data, networks, devices, or applications, GSV Solutions
                        is here to assist you in bolstering your security
                        measures.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes["cardGrid"]}>
          {cardBox.map((itemData, i) => {
            const {
              img = "",
              className = "",
              heading = "",
              text = "",
              para = "",
            } = itemData || {};
            return (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={4}
                className={classes["cardBody"]}
                key={i}
              >
                <Card
                  key={i}
                  sx={{ minWidth: 275 }}
                  className={classes["cardMenu"]}
                >
                  <CardContent
                    className={classes["cardContent position-relative"]}
                  >
                    <div className={classes["overlay"]}>
                      <div className={className} src={img}>
                        <img
                          src={img}
                          width="100%"
                          height="100%"
                          alt="Master the digital landscape"
                          className={classes["overlayImgClass"]}
                        />
                      </div>
                      <span className={classes["gradient"]}></span>
                      <div className={classes["headingMainDiv"]}>
                        <h3 className={classes["cardTopHeading"]}>{heading}</h3>
                        <div className={classes["cardTextDiv"]}>
                          <h4 className={classes["cardText"]}>{text}</h4>
                          <div className={classes["paragraph"]}>
                            <p>{para}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </main>
  );
};

export default Technologies;

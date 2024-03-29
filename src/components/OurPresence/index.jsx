import * as React from "react";
import * as classes from "./style.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// TODO: use it or remove it when required
// import wave1 from "../../Assets/SVGs/wave1white.svg";
// import wave2 from "../../Assets/SVGs/wave2grey.svg";

// DEPRECATED: deprecated previous chart
// import MapContainer from "./MapContainer.jsx";
import WorldMapWithIndia from "../WorldMapWithIndia";

export default function OurPresence() {
  return (
    <>
      <Box className={classes["mainBody"]}>
        {/* <Box className={`${classes.wave1grey} wave1grey`}>
          <img
            src={wave2}
            alt="wave 1"
            className={`${classes.firstWave} firstWave `}
          />
          <img src={wave2} alt="wave 1" />
          <img src={wave2} alt="wave 1" />
        </Box>
        <Box className={`${classes.wave1white} wave1white`}>
          <img
            src={wave1}
            alt="wave 1"
            className={`${classes.firstWave} firstWave `}
          />
          <img src={wave1} alt="wave 1" />
          <img src={wave1} alt="wave 1" />
        </Box> */}

        <Grid container className={classes["mainGrid"]}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            className={classes["gridLeft"]}
          >
            <Box className={classes["leftSideWorld"]}>
              <Typography className={classes["our-presence-title"]}>
                Worldwide Presence
              </Typography>
              <Typography
                variant={"body1"}
                className={classes["our-presence-text"]}
              >
                We provide Best in class services belongs to all IT technologies
                If you’re searching for talented tech minds who are dedicated to
                their work, we are a perfect fit. We are a dynamic
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={7}>
            <WorldMapWithIndia />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

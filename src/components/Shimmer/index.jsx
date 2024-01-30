import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../assets/logos/blueLogo.png";
import * as classes from "./Shimmer.module.css";

const Shimmer = () => {
  return (
    <>
      {/* <Box className={classes["header"]}>
        <img src={logo} alt="logo" width={"200px"} />
        <Box className={classes}>

        <Box className={classes["emptyBox"]}></Box>
        <Box className={classes["emptyBox"]}></Box>
        <Box className={classes["emptyBox"]}></Box>
        <Box className={classes["emptyBox"]}></Box>
        </Box>
        <Box>
            <Box className={classes['icons']}></Box>
            <Box className={classes['icons']}></Box>
            <Box className={classes['icons']}></Box>

        </Box>
      </Box> */}
      <Box className={classes["welcome"]}>
        <img src={logo} alt="logo" width={"200px"} />
        <Typography variant="h1">GSV Welcomes you</Typography>
      </Box>
    </>
  );
};

export default Shimmer;

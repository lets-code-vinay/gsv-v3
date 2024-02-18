import React from "react";
import Box from "@mui/material/Box";
import * as classes from "./style.module.css";

const FooterBottom = ({sx}) => {
  return (
    <Box className={classes["FooterBottom"]} sx={sx}>
      Copyright © GSV Systems LLP | All Right Reserved
    </Box>
  );
};

export default FooterBottom;

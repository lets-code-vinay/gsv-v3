import React from "react";

import InfinitySlider from "../InfinitySlider";
import {
  INFINITY_SLIDER_CONTENTS,
  INFINITY_SLIDER_CONTENTS_BOTTOM,
} from "../../Configs/InfinitySlider";
import * as classes from "./style.module.css";
import { Box } from "@mui/material";

const InfinitySliderContainer = () => {
  return (
    <Box className={classes["multiVendor"]}>
      <InfinitySlider
        isSlideSpeedFast={false}
        images={INFINITY_SLIDER_CONTENTS}
      />
      <InfinitySlider
        isSlideSpeedFast={true}
        images={INFINITY_SLIDER_CONTENTS_BOTTOM}
      />
    </Box>
  );
};

export default InfinitySliderContainer;

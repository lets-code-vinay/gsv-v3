import React from "react";
import * as classes from "./style.module.css";

const InfinitySlider = ({ isSlideSpeedFast = false, images }) => {
  return (
    <>
      <div className={classes["slid"]}>
        <div
          className={
            isSlideSpeedFast ? classes["highSpeed"] : classes["lowSpeed"]
          }
        >
          {images.map(({ name, image, alt }, index) => {
            return (
              <div className={classes["sliding-img"]} key={`${name}-${index}`}>
                <img src={image} alt={alt} className={classes["sliderImage"]} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfinitySlider;

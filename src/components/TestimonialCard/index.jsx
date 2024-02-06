import React from "react";
import { Typography } from "@mui/material";
import * as classes from "./styles.module.css";
import { Box } from "@mui/material";

const TestimonialCard = ({
  clientCount,
  about,
  author,
  designation,
  company,
  image,
  value,
}) => {
  return (
    <Box
      className={classes["clientCardTC"]}
      style={{
        maxWidth: "90%",
      }}
    >
      <img className={classes["testimonialImageTC"]} src={image} alt={value} />
      <Typography
        variant="h5"
        className={classes["testimonialCardMatterTC"]}
        sx={{ overflow: "scroll", height: "100px" }}
      >
        "{about}"
      </Typography>
      <Typography variant="body1" className={classes["testimonialCardUserTC"]}>
        <strong>{author},</strong> {designation}-{company}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;

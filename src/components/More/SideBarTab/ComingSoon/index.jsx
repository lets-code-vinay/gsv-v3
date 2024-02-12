import React from "react";
import "./style.css";
import Typography from "@mui/material/Typography";

const ComingSoon = ({ title = "" }) => {
  return (
    <>
      <Typography variant={"h6"}>Coming Soon...</Typography>
      <h1 className="ComingSoon my-5">{title}</h1>
    </>
  );
};

export default ComingSoon;

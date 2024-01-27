import React from "react";
import * as classes from "./style.module.css";
import { Popover } from "@mui/material";

const CustomPopOver = ({
  title,
  open,
  onClose,
  actionType,
  msg,
  anchorEl,
  clientCount,
}) => {
  const openPopOver = Boolean(anchorEl) && open;

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        className={classes["popover"]}
        // classes={{
        //   paper: classes.paper,
        // }}
        open={openPopOver}
        anchorEl={anchorEl}
        anchorPosition={{ top: 200, left: 300 }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={onClose}
        disableRestoreFocus
        elevation={10}
        style={{
          maxWidth: clientCount >= 1 && clientCount < 3 ? "110%" : "100%",
          marginLeft: clientCount >= 1 && clientCount < 3 ? "8%" : "3%",
        }}
      >
        {msg}
      </Popover>
    </div>
  );
};

export default CustomPopOver;

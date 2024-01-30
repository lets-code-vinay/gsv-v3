import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import * as classes from "./style.module.css";
import MapCharts from "./Maps.jsx";
import { CONTINENTS } from "../../../OurPresenceConfig/index.js";

function Presence(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Presence.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MapContainer({ isMapTitleEnable = false, title = "" }) {
  const [value, setValue] = React.useState(0);

  /**
   * @description Changing map on changing tab
   * @param {*} _
   * @param {*} newValue
   */
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes["presenceMain"]}>
      {isMapTitleEnable && (
        <h1 className={classes["mapTitle my-3"]}>{title}</h1>
      )}

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className={classes["continents-tabs"]}
        >
          {Object.values(CONTINENTS).map(({ name = "" }, index) => {
            return (
              <Tab
                className={classes["continents-tab"]}
                label={name}
                {...a11yProps(index)}
                key={`${name}-${index}`}
              />
            );
          })}
        </Tabs>
      </Box>

      {Object.values(CONTINENTS).map(
        ({ rotation = [], continent = [], region = "" }, index) => {
          return (
            <Presence value={value} index={index} key={index}>
              <MapCharts
                markers={continent}
                region={region}
                rotation={rotation}
              />
            </Presence>
          );
        }
      )}
    </Box>
  );
}

import React from "react";

import "./style.css";
import Grid from "@mui/material/Grid";

const GridPage = ({ data = [], title = "" }) => {
  return (
    <>
      <h1 className="gridHeading my-5">{title}</h1>
      <Grid container className="displayFlex">
        {data.map((findItem, i) => {
          return (
            <Grid
              item
              sm={6}
              xs={6}
              md={3}
              lg={3}
              index={i + "-" + findItem.img}
            >
              <img src={findItem.img} alt="" className="gridPageImage" />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default GridPage;

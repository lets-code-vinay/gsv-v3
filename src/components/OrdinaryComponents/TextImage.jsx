import React from "react";

import "./styles.css";
import Grid from "@mui/material/Grid";

const TextImage = ({ title = "", subtitle = "", image = "", alt = "" }) => {
    // in this component dom is represented first Image and then right side  text data-
    return (
        <Grid container className="displayFlex">
            <Grid item xs={12} sm={12} md={7} lg={7}>
                <img
                    src={image}
                    alt={alt}
                    width="80%"
                    height="100%"
                    style={{ margin: "0 10%" }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
                <div>
                    <h1 className="heading my-2">{title} </h1>
                    <p className="subtitle">{subtitle}</p>
                </div>
            </Grid>

        </Grid>
    );
};

export default TextImage;

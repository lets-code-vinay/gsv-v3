import React, { useState } from "react";
import * as classes from "./styles.module.css";
import PieChart from "./GooglePieChart";
import { DEFAULT_SERVICES, INSIGHT_DATA } from "./insightData";
import CustomizedDialogs from "../CustomizedDialogs";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const Insight = () => {
  const [insightDetail, setInsightDetail] = useState();
  const [openKnowMore, setOpenKnowMore] = useState(false);
  const [dialogMSG, setDialogMSG] = useState(DEFAULT_SERVICES.info);
  const [dialogTitle, setDialogTitle] = useState(DEFAULT_SERVICES.title);

  /**
   * @description update values in right grid from selection
   *
   * @param {Object} insight
   */
  const getInsightDetail = (insight) => {
    setInsightDetail(Object.values(INSIGHT_DATA)[insight]);
  };

  /**
   * @description Open dialog to read more
   */
  const handleKnowMore = (info, title) => (_) => {
    setOpenKnowMore(true);
    setDialogMSG(info);
    setDialogTitle(title);
  };

  /**
   * @description Close dialog
   */
  const handleClose = () => {
    setOpenKnowMore(!openKnowMore);
  };

  const {
    color = DEFAULT_SERVICES.color,
    info = DEFAULT_SERVICES.info,
    title = DEFAULT_SERVICES.title,
  } = insightDetail || DEFAULT_SERVICES;

  return (
    <>
      <main className={classes["container-services"]}>
        <Paper elevation={24} className={classes["piePaper"]}>
          <Grid container className={classes["pieGrid"]}>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              lg={6}
              className={classes["pieBox"]}
            >
              <PieChart
                data={INSIGHT_DATA}
                fetchInsightDetails={getInsightDetail}
                onKnowMoreClick={handleKnowMore(info, title)}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={6}>
              <Box className={classes["pieDetail"]}>
                <Typography variant={"h4"} className={classes["pieTitle"]}>
                  {title}
                </Typography>
                <Typography variant={"body1"} className={classes["pieInfo"]}>
                  {info}
                </Typography>

                <Button
                  variant="contained"
                  className={classes["pieButton"]}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={handleKnowMore(info, title)}
                >
                  Know More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </main>

      <CustomizedDialogs
        title={dialogTitle}
        open={openKnowMore}
        onClose={handleClose}
        msg={dialogMSG}
      />
    </>
  );
};

export default Insight;

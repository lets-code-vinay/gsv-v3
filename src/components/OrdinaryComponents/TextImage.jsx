import React from "react";

import "./styles.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const TextImage = ({ data }) => {
    // in this component dom is represented first Image and then right side  text data-
    return <> {
        data?.child?.map((text, index) => {
            console.log('i', index)
            return <>
                {
                    (index + 1 === 1 || index + 1 === 3) ?
                        <Grid container>

                            <Grid item xs={12} sm={12} md={7} lg={7}>
                                <div>
                                    {/* <h1 className="heading my-2">{text?.title} </h1> */}
                                    <Typography className="details" sx={{ margin: '15% 10% 2%' }} >{text?.details}</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5} lg={5}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    margin: '5% 0 0 0'
                                }}
                            >
                                <img
                                    src={text?.image}
                                    alt={'alt'}
                                    width="80%"
                                    height="100%"
                                    style={{
                                        margin: '58px 10%',
                                        width: '70%',
                                        height: '70%'
                                    }}
                                />
                            </Grid>

                        </Grid > :
                        <Grid container>
                            <Grid item xs={12} sm={12} md={5} lg={5}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    // margin: '5% 0'
                                }}
                            >
                                <img
                                    src={text?.image}
                                    alt={'alt'}
                                    width="80%"
                                    height="100%"
                                    style={{
                                        margin: '58px 10%',
                                        width: '70%',
                                        height: '70%'
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={7} lg={7}>
                                <div>
                                    <h1 className="heading my-2">{text?.title} </h1>
                                    <Typography className="details" sx={{ margin: '5% 10% 2%' }} >{text?.details}</Typography>
                                </div>
                            </Grid>


                        </Grid >
                }

            </>
        })
    }
    </>
};

export default TextImage;

import React from "react";

import "./styles.css";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import img from '../../assets/images/SDWAN.png'
const TextImage = (props) => {
    const { data } = props
    console.log('data', data)
    const location = useLocation()
    console.log('location', location)
    // in this component dom is represented first Image and then right side  text data-

    const customStyle = {
        // backgroundImage: url('../../assets/images/SD-WAN.jpg'),
        backgroundImage: `url(${data?.thumbnail})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '75vh',
        margin: '10% 9% 0%',

    }

    return <>
        <Box>
            <Box
                style={customStyle}
            >
                <Box sx={{ fontSize: '50px', color: 'wheat', fontWeight: 700, margin: 'auto', padding: '0% 10%' }}>
                    {location?.state?.title}
                </Box>
                <Typography sx={{ width: '50%', fontSize: '40px', fontWeight: 400, margin: 'auto 10%', color: 'white' }}>
                    Transform your future infrastruture with our managed solutions for {location?.state?.subTitle}
                </Typography>
            </Box>
        </Box>
        {
            data?.child?.map((text, index) => {
                console.log('i', index)
                return <>
                    {
                        (index + 1 === 1 || index + 1 === 3) ?
                            <Grid container>

                                <Grid item xs={12} sm={12} md={7} lg={7}>
                                    <div>
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

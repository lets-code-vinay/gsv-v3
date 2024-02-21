import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LanRoutingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Routing'

const Routing = () => {
    const [data, setData] = useState(LanRoutingData)

    return <>
        {/* <Box sx={{ background: '#44a8f44f', borderRadius: '20px', fontWeight: '900', margin: '8% 5% 0% 5%', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>

            {data?.title}
        </Box>
        {
            data?.child?.map((text, index) => {
                return <>
                    <ShowData
                        title={data?.title}
                        details={text.details}
                        image={text.image}
                        alt='test'
                    />
                </>
            })
        } */}
        {
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

        {/* text shown on the right and image on the left */}
        {/* {
            data?.child?.map((text, index) => {
                return <>
                    <Grid container className="displayFlex">
                        <Grid item xs={12} sm={12} md={7} lg={7}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '5% 0'
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
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <div>
                                <h1 className="heading my-2">{text?.title} </h1>
                                <Typography className="details" sx={{ margin: '15% 10% 2%' }} >{text?.details}</Typography>
                            </div>
                        </Grid>


                    </Grid >
                </>
            })
        } */}


    </>
}

export default Routing

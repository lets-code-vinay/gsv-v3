import { Box, Grid } from '@mui/material'
import React from 'react'

const ShowData = (props) => {
    const { details, title, image, alt } = props

    return <>
        {/* <Box sx={{ background: '#44a8f44f', borderRadius: '20px', fontWeight: '900', margin: '8% 5% 0% 5%', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>

            {title}
        </Box> */}

        <Grid container className='' sx={{ width: '80%', margin: 'auto', padding: '20px 0px' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Box sx={{ fontSize: '17px' }}>
                    {/* <h1>{title} </h1> */}
                    <p style={{ padding: '50px' }}>{details}</p>
                </Box>
                <Box
                    sx={{ display: 'flex', justifyContent: 'center' }}

                >{
                        image && <img
                            src={image}
                            alt={alt}
                            width="50%"
                            height="50%"
                        />
                    }

                </Box>
            </Grid>
        </Grid>

    </>
}

export default ShowData

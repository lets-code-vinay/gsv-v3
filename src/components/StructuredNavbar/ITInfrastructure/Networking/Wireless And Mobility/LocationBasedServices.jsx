

import { Box } from '@mui/material'
import React, { useState } from 'react'
import { LBS_Data } from '../../../../../configs/ITInfrastructure/Networking/Wireless And Mobility/LocationBasedServices'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const LocationBasedServices = () => {
    const [data, setData] = useState(LBS_Data)

    return <>
        <Box sx={{ background: '#44a8f44f', borderRadius: '20px', fontWeight: '900', margin: '8% 5% 0% 5%', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>

            {data?.title}
        </Box>
        {/* {
            data?.child?.map((text, index) => {
                return <>
                    <ShowData
                        title={data?.title}
                        details={text.details}
                        image={text.image}
                        alt='img'
                    />
                </>
            })
        } */}
        <TextImage data={data} />


    </>
}

export default LocationBasedServices

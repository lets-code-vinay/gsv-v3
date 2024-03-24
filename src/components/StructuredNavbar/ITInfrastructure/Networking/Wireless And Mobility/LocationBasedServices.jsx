

import { Box } from '@mui/material'
import React, { useState } from 'react'
import { LBS_Data } from '../../../../../configs/ITInfrastructure/Networking/Wireless And Mobility/LocationBasedServices'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const LocationBasedServices = () => {
    const [data, setData] = useState(LBS_Data)

    return <>
        <TextImage data={data} />


    </>
}

export default LocationBasedServices

import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SDWAN_Data } from '../../../../../configs/ITInfrastructure/Networking/WAN/SDWAN'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'
// import SDWAN_IMG from '../../../../../assets/images/IT & Infrastructure/WAN Images/SD-WAN.jpg'

import './style.css'
const SD_WAN = () => {
    const [data, setData] = useState(SDWAN_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default SD_WAN

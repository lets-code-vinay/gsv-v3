import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { LanRoutingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Routing'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const SDWAN_Service = () => {
    const [switchingValue, setSwitchingValue] = useState(LanRoutingData)

    return <>
        <TextImage data={data} />


    </>
}

export default SDWAN_Service

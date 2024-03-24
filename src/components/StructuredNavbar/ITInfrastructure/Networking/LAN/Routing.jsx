import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LanRoutingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Routing'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Routing = () => {
    const [data, setData] = useState(LanRoutingData)

    return <>
        <TextImage
            data={data}
        />
    </>
}

export default Routing

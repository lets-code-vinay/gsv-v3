import { Box } from '@mui/material'
import React, { useState } from 'react'
import { WIFI_data } from '../../../../../configs/ITInfrastructure/Networking/Wireless And Mobility/WIFI'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const WIFI = () => {
    const [data, setData] = useState(WIFI_data)

    return <>
        <TextImage data={data} />

    </>
}

export default WIFI

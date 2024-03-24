import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Unified_Wireless_Data } from '../../../../../configs/ITInfrastructure/Networking/Wireless And Mobility/UnifiedWireless'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const UnifiedWireless = () => {
    const [data, setData] = useState(Unified_Wireless_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default UnifiedWireless

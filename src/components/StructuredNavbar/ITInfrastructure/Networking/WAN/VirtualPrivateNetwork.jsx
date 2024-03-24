import { Box } from '@mui/material'
import React, { useState } from 'react'
import { VPN_Data } from '../../../../../configs/ITInfrastructure/Networking/WAN/VPN'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const VirtualPrivateNetwork = () => {
    const [data, setData] = useState(VPN_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default VirtualPrivateNetwork

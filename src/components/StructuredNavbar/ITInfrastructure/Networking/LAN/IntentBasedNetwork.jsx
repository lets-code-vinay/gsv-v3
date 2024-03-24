import { Box } from '@mui/material'
import React, { useState } from 'react'
import { IBN_Data } from '../../../../../configs/ITInfrastructure/Networking/LAN/IntentBasedNetwork'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const InternetBasedNetwork = () => {
    const [data, setData] = useState(IBN_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default InternetBasedNetwork

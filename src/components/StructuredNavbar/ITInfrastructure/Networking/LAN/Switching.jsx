import { Box } from '@mui/material'
import React, { useState } from 'react'
import { SwitchingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Switching'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Switching = () => {
    const [data, setData] = useState(SwitchingData)

    return <>
        <TextImage data={data} />
    </>
}

export default Switching

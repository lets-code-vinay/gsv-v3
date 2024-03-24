import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Enterprise_Mobility_Data } from '../../../../../configs/ITInfrastructure/Networking/Wireless And Mobility/EnterpriseMobility'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const EnterpriseMobility = () => {
    const [data, setData] = useState(Enterprise_Mobility_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default EnterpriseMobility

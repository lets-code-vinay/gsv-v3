import { Box } from '@mui/material'
import React, { useState } from 'react'
import { SASE_Data } from '../../../../../configs/ITInfrastructure/Networking/WAN/SASE'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const SASE = () => {
    const [data, setData] = useState(SASE_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default SASE

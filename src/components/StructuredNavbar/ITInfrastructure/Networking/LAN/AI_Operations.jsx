import { Box } from '@mui/material'
import React, { useState } from 'react'
import { AI_Operations_Data } from '../../../../../configs/ITInfrastructure/Networking/LAN/AI_Operations'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const AI_Operations = () => {
    const [data, setData] = useState(AI_Operations_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default AI_Operations

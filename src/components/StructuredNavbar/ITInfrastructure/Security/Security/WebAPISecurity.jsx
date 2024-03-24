import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { WebAPISecurity_Data } from '../../../../../configs/ITInfrastructure/Security/Security/WebAPISecurity'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const WebAPISecurity = () => {
    const [data, setData] = useState(WebAPISecurity_Data)

    return <>
        <TextImage data={data}/>

    </>
}

export default WebAPISecurity

import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { EndpointSecurity_Data } from '../../../../../configs/ITInfrastructure/Security/Security/EndpointSecuirty'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const EndPoint_Security = () => {
    const [data, setData] = useState(EndpointSecurity_Data)

    return <>
       
        <TextImage data={data}/>

    </>
}

export default EndPoint_Security

import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Network_Security_Data } from '../../../../../configs/ITInfrastructure/Security/Security/NetworkSecurity'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const NetworkSecurity = () => {
    const [data, setData] = useState(Network_Security_Data)

    return <>
        
        <TextImage data={data} />

    </>
}

export default NetworkSecurity

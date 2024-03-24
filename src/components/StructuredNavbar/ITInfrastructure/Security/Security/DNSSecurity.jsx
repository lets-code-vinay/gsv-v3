import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { DNS_Data } from '../../../../../configs/ITInfrastructure/Security/Security/DNS_Security'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const DNS_Security = () => {
    const [data, setData] = useState(DNS_Data)

    return <>
        <TextImage data={data}/>

    </>
}

export default DNS_Security

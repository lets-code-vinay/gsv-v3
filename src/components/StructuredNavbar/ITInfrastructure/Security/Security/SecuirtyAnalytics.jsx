import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Security_Analytics_Data } from '../../../../../configs/ITInfrastructure/Security/Security/SecuirtyAnalytics'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Security_Analytics = () => {
    const [data, setData] = useState(Security_Analytics_Data)

    return <>
        <TextImage data={data}/>

    </>
}

export default Security_Analytics

import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Data_Center_Security_Data } from '../../../../../configs/ITInfrastructure/Security/Security/DataCenterSecurity'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const DataCenterSecurity = () => {
    const [data, setData] = useState(Data_Center_Security_Data)

    return <>
        <TextImage data={data} />
    </>
}

export default DataCenterSecurity

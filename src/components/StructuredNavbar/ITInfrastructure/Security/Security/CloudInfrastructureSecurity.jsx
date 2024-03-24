import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Cloud_Security_Data } from '../../../../../configs/ITInfrastructure/Security/Security/CloudInfrastructureSecurity'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Cloud_Security = () => {
    const [data, setData] = useState(Cloud_Security_Data)

    return <>
        <TextImage data={data}/>

    </>
}

export default Cloud_Security

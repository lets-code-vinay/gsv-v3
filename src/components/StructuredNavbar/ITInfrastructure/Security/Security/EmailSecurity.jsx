import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { EMAIL_Security_Data } from '../../../../../configs/ITInfrastructure/Security/Security/EmailSecurity'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Email_Security = () => {
    const [data, setData] = useState(EMAIL_Security_Data)

    return <>
        <TextImage data={data}/>

    </>
}

export default Email_Security

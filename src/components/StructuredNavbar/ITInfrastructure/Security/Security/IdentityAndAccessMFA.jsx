import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { IdentityAccessMFA_Data } from '../../../../../configs/ITInfrastructure/Security/Security/IdentityAndAccess'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const IdentityAccessMFASecurity = () => {
    const [data, setData] = useState(IdentityAccessMFA_Data)

    return <>
        <TextImage data={data}/>

    </>
}

export default IdentityAccessMFASecurity

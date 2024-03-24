import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { RemoteAccessVPN_Data } from '../../../../../configs/ITInfrastructure/Security/Security/RemoteAccessVPN'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const RemoteAccessVPN = () => {
    const [data, setData] = useState(RemoteAccessVPN_Data)

    return <>
       
        <TextImage data={data}/>

    </>
}

export default RemoteAccessVPN

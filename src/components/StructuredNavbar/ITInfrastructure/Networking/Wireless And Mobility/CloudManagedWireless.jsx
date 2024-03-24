import { Box } from '@mui/material'
import React, { useState } from 'react'
import { CMW_Data } from '../../../../../configs/ITInfrastructure/Networking/Wireless And Mobility/CloudManagedWireless'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Cloud_Managed_Wireless = () => {
    const [data, setData] = useState(CMW_Data)

    return <>

        <TextImage data={data} />

    </>
}

export default Cloud_Managed_Wireless

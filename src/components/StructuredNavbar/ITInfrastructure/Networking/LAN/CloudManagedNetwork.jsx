import { Box } from '@mui/material'
import React, { useState } from 'react'
import { CMN_Data } from '../../../../../configs/ITInfrastructure/Networking/LAN/CloudManagedNetwork'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const CloudManagedNetwork = () => {
    const [data, setData] = useState(CMN_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default CloudManagedNetwork

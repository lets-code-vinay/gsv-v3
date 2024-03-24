import { Box } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { ManagedDetection_Data } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/ManagedDetectionResponse'
import TextImage from '../../../../OrdinaryComponents/TextImage'
const Manage_Detection_Res = () => {
    const [data, setData] = useState(ManagedDetection_Data)

    return <>
        <TextImage data={data}/>

    </>
}

export default Manage_Detection_Res

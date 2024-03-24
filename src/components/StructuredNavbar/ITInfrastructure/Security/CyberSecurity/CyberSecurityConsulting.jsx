import { Box } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Cyber_Security_Data } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/CyberSecurityConsulting'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const CyberSecurity_Consulting = () => {
    const [data, setData] = useState(Cyber_Security_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default CyberSecurity_Consulting

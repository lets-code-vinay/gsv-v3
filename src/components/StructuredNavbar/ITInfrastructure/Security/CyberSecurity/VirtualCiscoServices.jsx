import { Box } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { CISCO_Security } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/VirtualCiscoServices'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const VirtualCiscoService = () => {
    const [data, setData] = useState(CISCO_Security)

    return <>
        <TextImage data={data}/>

    </>
}

export default VirtualCiscoService

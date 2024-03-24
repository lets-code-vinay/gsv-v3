import { Box } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { RansomeWare_Data } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/RansomewareThreatResponse'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const RansomeWareThreate = () => {
    const [data, setData] = useState(RansomeWare_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default RansomeWareThreate

import { Box } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Penetration_data } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/PenetrationTesting'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Penetration_Testing = () => {
    const [data, setData] = useState(Penetration_data)

    return <>
        <TextImage data={data} />

    </>
}

export default Penetration_Testing

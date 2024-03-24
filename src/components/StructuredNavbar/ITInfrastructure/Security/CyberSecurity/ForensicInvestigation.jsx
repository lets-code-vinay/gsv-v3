import { Box } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Forensic_Investigation_Data } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/ForensicInvestigation'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Forensic_Investigation = () => {
    const [data, setData] = useState(Forensic_Investigation_Data)

    return <>
        <TextImage data={data} />

    </>
}

export default Forensic_Investigation

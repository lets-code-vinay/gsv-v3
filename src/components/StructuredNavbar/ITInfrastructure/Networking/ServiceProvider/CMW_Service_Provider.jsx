import { Box } from '@mui/material'
import React, { useState } from 'react'
import { CMW_ServiceProvider } from '../../../../../configs/ITInfrastructure/Networking/ServiceProvider/CMW_ServiceProvider'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const CMW_Service_Provider = () => {
    const [data, setData] = useState(CMW_ServiceProvider)

    return <>
        <TextImage data={data} />

    </>
}

export default CMW_Service_Provider

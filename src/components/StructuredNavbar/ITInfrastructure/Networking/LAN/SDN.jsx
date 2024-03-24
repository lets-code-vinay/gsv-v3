import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { SDN_Data } from '../../../../../configs/ITInfrastructure/Networking/LAN/SDN'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const SDN = () => {
    const [data, setData] = useState(SDN_Data)

    return <>
       
        <TextImage data={data} />

    </>
}

export default SDN

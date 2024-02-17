import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { LanRoutingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Routing'
import TextImage from '../../../../OrdinaryComponents/TextImage'
import ShowData from '../../../../OrdinaryComponents'
import { Network_Security_Data } from '../../../../../configs/ITInfrastructure/Security/Security/NetworkSecurity'

const NetworkSecurity = () => {
    const [data, setData] = useState(Network_Security_Data)

    return <>
        <Box sx={{ background: '#44a8f44f', borderRadius: '20px', fontWeight: '900', margin: '8% 5% 0% 5%', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>

            {data?.title}
        </Box>
        {
            data?.child?.map((text, index) => {
                return <>
                    <ShowData
                        title={data?.title}
                        details={text.details}
                        image={text.image}
                        alt='test'
                    />
                </>
            })
        }

    </>
}

export default NetworkSecurity

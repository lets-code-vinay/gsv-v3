import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import TextImage from '../../../../OrdinaryComponents/TextImage'
import { SDWAN_Data } from '../../../../../configs/ITInfrastructure/Networking/WAN/SDWAN'
import ShowData from '../../../../OrdinaryComponents'
import { Penetration_data } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/PenetrationTesting'
import { RansomeWare_Data } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/RansomewareThreatResponse'

const RansomeWareThreate = () => {
    const [data, setData] = useState(RansomeWare_Data)

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
                        alt='img'
                    />
                </>
            })
        }
    </>
}

export default RansomeWareThreate

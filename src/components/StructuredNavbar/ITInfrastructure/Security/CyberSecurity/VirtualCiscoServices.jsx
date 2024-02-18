import { Box } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { CISCO_Security } from '../../../../../configs/ITInfrastructure/Security/CyberSecurity/VirtualCiscoServices'

const VirtualCiscoService = () => {
    const [data, setData] = useState(CISCO_Security)

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

export default VirtualCiscoService

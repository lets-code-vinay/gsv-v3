import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import TextImage from '../../../../OrdinaryComponents/TextImage'
import { CMW_ServiceProvider } from '../../../../../configs/ITInfrastructure/Networking/ServiceProvider/CMW_ServiceProvider'
import ShowData from '../../../../OrdinaryComponents'

const CMW_Service_Provider = () => {
    const [data, setData] = useState(CMW_ServiceProvider)

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

export default CMW_Service_Provider

import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import TextImage from '../../../../OrdinaryComponents/TextImage'
import { CMW_ServiceProvider } from '../../../../../configs/ITInfrastructure/Networking/ServiceProvider/CMW_ServiceProvider'

const CMW_Service_Provider = () => {
    const [switchingValue, setSwitchingValue] = useState(CMW_ServiceProvider)

    return <>
        <Box>
            This is routing
            {switchingValue?.title}
        </Box>
        {
            switchingValue?.child?.map((text, index) => {
                return <>
                    <ImageText
                        title={text?.title}
                        subtitle={text.details}
                        image={text.image}
                        alt='test'
                    />
                    <TextImage
                        title={text?.title}
                        subtitle={text.details}
                        image={text.image}
                        alt='test'
                    />
                </>
            })
        }

    </>
}

export default CMW_Service_Provider

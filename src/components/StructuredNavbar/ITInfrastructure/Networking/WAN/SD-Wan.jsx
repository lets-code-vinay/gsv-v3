import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { LanRoutingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Routing'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const SD_WAN = () => {
    const [switchingValue, setSwitchingValue] = useState(LanRoutingData)

    return <>
        <Box>
            This is SD WAN
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

export default SD_WAN

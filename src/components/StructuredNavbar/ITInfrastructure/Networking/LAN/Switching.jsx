import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { SwitchingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Switching'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Switching = () => {
    const [switchingValue, setSwitchingValue] = useState(SwitchingData)

    return <>
        <Box>{switchingValue?.title}</Box>
        {
            switchingValue?.child?.map((text, index) => {
                return <>
                    <ImageText
                        title={text?.title}
                        subtitle={text.subtitle}
                        image={text.image}
                        alt='test'
                    />
                    <TextImage
                        title={text?.title}
                        subtitle={text.subtitle}
                        image={text.image}
                        alt='test'
                    />
                </>
            })
        }

    </>
}

export default Switching

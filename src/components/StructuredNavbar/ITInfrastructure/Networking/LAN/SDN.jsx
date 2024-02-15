import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { SDN_Data } from '../../../../../configs/ITInfrastructure/Networking/LAN/SDN'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const SDN = () => {
    const [switchingValue, setSwitchingValue] = useState(SDN_Data)

    return <>
        <Box>This is SDN Data {switchingValue?.title}</Box>
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

export default SDN

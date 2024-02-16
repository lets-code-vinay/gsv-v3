import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { SwitchingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Switching'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Switching = () => {
    const [data, setData] = useState(SwitchingData)

    return <>
        <Box sx={{margin: '5%', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
            
            {data?.title}
        </Box>
        {
            data?.child?.map((text, index) => {
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

export default Switching

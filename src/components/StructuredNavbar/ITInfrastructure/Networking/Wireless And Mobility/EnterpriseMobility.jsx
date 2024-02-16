import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import TextImage from '../../../../OrdinaryComponents/TextImage'
import { Enterprise_Mobility_Data } from '../../../../../configs/ITInfrastructure/Networking/Wireless And Mobility/EnterpriseMobility'

const EnterpriseMobility = () => {
    const [data, setData] = useState(Enterprise_Mobility_Data)

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

export default EnterpriseMobility

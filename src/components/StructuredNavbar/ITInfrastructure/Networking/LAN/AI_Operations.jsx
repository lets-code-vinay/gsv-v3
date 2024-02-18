import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import TextImage from '../../../../OrdinaryComponents/TextImage'
import { AI_Operations_Data } from '../../../../../configs/ITInfrastructure/Networking/LAN/AI_Operations'
import ShowData from '../../../../OrdinaryComponents'

const AI_Operations = () => {
    const [data, setData] = useState(AI_Operations_Data)

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

export default AI_Operations

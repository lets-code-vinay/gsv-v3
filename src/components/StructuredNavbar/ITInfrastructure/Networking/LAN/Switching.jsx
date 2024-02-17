import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImageText from '../../../../More/SideBarTab/ImageText'
import { SwitchingData } from '../../../../../configs/ITInfrastructure/Networking/LAN/Switching'
import TextImage from '../../../../OrdinaryComponents/TextImage'
import ShowData from '../../../../OrdinaryComponents'

const Switching = () => {
    const [data, setData] = useState(SwitchingData)

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
                        alt='test'
                    />
                </>
            })
        }
    </>
}

export default Switching

import { Box } from '@mui/material'
import React, { useState } from 'react'
import { IBN_Data } from '../../../../../configs/ITInfrastructure/Networking/LAN/IntentBasedNetwork'
import ShowData from '../../../../OrdinaryComponents'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const InternetBasedNetwork = () => {
    const [data, setData] = useState(IBN_Data)

    return <>
        <Box sx={{ background: '#44a8f44f', borderRadius: '20px', fontWeight: '900', margin: '8% 5% 0% 5%', fontSize: '50px', display: 'flex', justifyContent: 'center' }}>

            {data?.title}
        </Box>
        {/* {
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
        } */}
        <TextImage data={data} />

    </>
}

export default InternetBasedNetwork

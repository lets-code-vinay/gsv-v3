import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Security_Analytics_Data } from '../../../../../configs/ITInfrastructure/Security/Security/SecuirtyAnalytics'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Security_Analytics = () => {
    const [data, setData] = useState(Security_Analytics_Data)

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
                        alt='test'
                    />
                </>
            })
        } */}
        <TextImage data={data}/>

    </>
}

export default Security_Analytics

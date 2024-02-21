import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import ShowData from '../../../../OrdinaryComponents'
import { Cloud_Security_Data } from '../../../../../configs/ITInfrastructure/Security/Security/CloudInfrastructureSecurity'
import TextImage from '../../../../OrdinaryComponents/TextImage'

const Cloud_Security = () => {
    const [data, setData] = useState(Cloud_Security_Data)

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

export default Cloud_Security

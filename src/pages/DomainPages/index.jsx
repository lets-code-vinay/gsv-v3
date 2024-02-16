import React from 'react';
import { useParams } from 'react-router-dom';


const DomainPages =() =>{
    const params = useParams();
    console.log('params', params)
    return(
<h1>hello dynamic routing</h1>
    )

}

export default DomainPages
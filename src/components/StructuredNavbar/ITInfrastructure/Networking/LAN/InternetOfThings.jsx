import React, { useState } from "react";
import Box from "@mui/material/Box";
import { IOT_Data } from "../../../../../configs/ITInfrastructure/Networking/LAN/IOT";
import ShowData from "../../../../OrdinaryComponents";
import TextImage from "../../../../OrdinaryComponents/TextImage";

const InternetOfThings = () => {
  const [data, setData] = useState(IOT_Data);

  return (
    <>
        <TextImage data={data}/>

    </>
  );
};

export default InternetOfThings;

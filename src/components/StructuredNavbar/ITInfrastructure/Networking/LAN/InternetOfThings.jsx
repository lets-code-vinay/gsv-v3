import React, { useState } from "react";
import Box from "@mui/material/Box";
import { IOT_Data } from "../../../../../configs/ITInfrastructure/Networking/LAN/IOT";
import ShowData from "../../../../OrdinaryComponents";

const InternetOfThings = () => {
  const [data, setData] = useState(IOT_Data);

  return (
    <>
      <Box
        sx={{
          background: "#44a8f44f",
          borderRadius: "20px",
          fontWeight: "900",
          margin: "8% 5% 0% 5%",
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data?.title}
      </Box>
      {data?.child?.map((text, index) => {
        return (
          <>
            <ShowData
              title={data?.title}
              details={text.details}
              image={text.image}
              alt="img"
            />
          </>
        );
      })}
    </>
  );
};

export default InternetOfThings;

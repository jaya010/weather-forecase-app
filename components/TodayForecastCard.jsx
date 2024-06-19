import {Box , Typography ,} from "@mui/material";
import React from 'react'

function TodayForecastCard() {
  return (
   <Box 
   display={"flex"}
   flexDirection={"column"}
   alignItems={"center"}
   justifyContent={"space-between"}
   width={100}
   height={100}
   borderRight={"1px solid white"}
   marginTop={2}
   >
<Typography>6:00 AM</Typography>
<Typography>40°C</Typography>


   </Box>
  );
}

export default TodayForecastCard;
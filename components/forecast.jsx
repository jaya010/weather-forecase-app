import {Box , Typography ,} from "@mui/material";
import React from 'react'
import ForeCastTile from "./components/ForecastTile.jsx";

function Forecast() {
  return (
    <Box
        marginTop={5}
        sx={{backgroundColor: "#202B3C"}}
        padding={"30px 20px"}
        borderRadius={2}>
            <Typography>7 DAY FORECAST</Typography>
            <ForeCastTile />
            <ForeCastTile />
            <ForeCastTile />
            <ForeCastTile />
            <ForeCastTile />
            <ForeCastTile />
            <ForeCastTile />
            <ForeCastTile />
    </Box>
  );
}

export default Forecast;
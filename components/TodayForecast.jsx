import {Box, Typography } from "@mui/material";
import React from 'react'
import TodayForecastCard from "./TodayForecastCard";

function TodayForecast() {
  return (
<Box marginTop={5}>
    <Typography>TODAY'S FORECAST</Typography>
    <Box display={"flex"}alignItems={''}>
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
    </Box>
    </Box>
  );
}

export default TodayForecast
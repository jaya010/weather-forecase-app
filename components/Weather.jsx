import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Weather = ({ weather }) => {
  return (
    
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <WbSunnyIcon style={{ fontSize: 40, marginRight: 10 }} />
          <Typography variant="h5">
            {weather.name}, {weather.sys.country}
          </Typography>
        </Box>
        <Typography variant="body1">
          Temperature: {weather.main.temp}°C
        </Typography>
        <Typography variant="body1">
          Weather: {weather.weather[0].description}
        </Typography>
        <Typography variant="body1">
          Humidity: {weather.main.humidity}%
        </Typography>
        <Typography variant="body1">
          Wind Speed: {weather.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Weather;

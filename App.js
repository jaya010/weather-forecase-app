import React, { useState } from 'react';
import { Container, Typography, Box, ThemeProvider} from '@mui/material';
import Weather from './components/Weather.jsx';
import Search from './components/Search.jsx';
import TodayForecast from './components/TodayForecast';

const App = () => {
  const [weather, setWeather] = useState(null);

  // Mock data to simulate fetched weather data
  const mockWeatherData = {
    name: 'KARACHI',
    sys: { country: 'PAKISTAN' },
    main: { temp: 40, humidity: 72 },
    weather: [{ description: 'clear sky' }],
    wind: { speed: 5 },
   };

  const fetchWeather = (city) => {
    // Simulate fetching data by setting mock data
    setWeather(mockWeatherData);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Weather Forecast
        </Typography>
        <Search fetchWeather={fetchWeather} />
        {weather && <Weather weather={weather} />}
      </Box>
      <TodayForecast />
      
    </Container>
    
  );
};
export default App;


import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" justifyContent="center" mb={2}>
      <TextField
        label="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Get Weather
      </Button>
    </Box>
  );
};

export default Search;

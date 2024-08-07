import React, { useState } from 'react';
import { TextField, Button, Autocomplete } from '@mui/material';
import { fetchCityData, fetchWeather, fetchCitySuggestions } from '../services/weatherService';

function WeatherSearch({ setWeatherData }) {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = async () => {
        try {
            const cityData = await fetchCityData(city);
            const weatherData = await fetchWeather(cityData.Key);
            setWeatherData({ city: cityData, weather: weatherData });
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = async (event, value) => {
        setCity(value);
        if (value.length > 2) {
            try {
                const citySuggestions = await fetchCitySuggestions(value);
                setSuggestions(citySuggestions);
            } catch (error) {
                console.error(error);
            }
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Autocomplete
                freeSolo
                options={suggestions.map((option) => option.LocalizedName)}
                onInputChange={handleInputChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                )}
            />
            <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginLeft: '10px' }}>
                Search
            </Button>
        </div>
    );
}

export default WeatherSearch;

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { fetchCityData, fetchCurrentWeather } from '../services/weatherService';

function FavoritesPage() {
    const [favoriteWeatherData, setFavoriteWeatherData] = useState([]);

    useEffect(() => {
        const fetchFavoritesWeather = async () => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const weatherDataPromises = favorites.map(async (city) => {
                const cityData = await fetchCityData(city);
                const weatherData = await fetchCurrentWeather(cityData.Key);
                return { city: cityData, weather: weatherData };
            });

            try {
                const weatherData = await Promise.all(weatherDataPromises);
                setFavoriteWeatherData(weatherData);
            } catch (error) {
                console.error('Error fetching favorites weather data:', error);
            }
        };

        fetchFavoritesWeather();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {favoriteWeatherData.map(({ city, weather }) => (
                <Card key={city.Key} style={{ width: '150px', margin: '10px', textAlign: 'center' }}>
                    <CardContent>
                        <Typography variant="h6">{city.LocalizedName}</Typography>
                        <Typography variant="body2">{weather.Temperature.Metric.Value}°C</Typography>
                        <Typography variant="body2">{weather.WeatherText}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default FavoritesPage;

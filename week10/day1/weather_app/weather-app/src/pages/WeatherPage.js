import React, { useState, useEffect } from 'react';
import WeatherSearch from '../components/WeatherSearch';
import WeatherCard from '../components/WeatherCard';
import { fetchCityData, fetchWeather } from '../services/weatherService';

function WeatherPage() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getDefaultWeather = async () => {
            try {
                const cityData = await fetchCityData('Tel Aviv');
                const weatherData = await fetchWeather(cityData.Key);
                setWeatherData({ city: cityData, weather: weatherData });
            } catch (error) {
                console.error(error);
            }
        };

        getDefaultWeather();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <WeatherSearch setWeatherData={setWeatherData} />
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
}

export default WeatherPage;

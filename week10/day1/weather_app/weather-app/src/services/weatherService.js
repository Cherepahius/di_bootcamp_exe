import axios from 'axios';

const API_KEY = 'WT9rFLaV1K8yWGX35ek4mbiq4c8tsnj1';

export const fetchCityData = async (city) => {
    try {
        const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search`, {
            params: {
                q: city,
                apikey: API_KEY,
            },
        });
        return response.data[0]; // Return the first match
    } catch (error) {
        console.error('Error fetching city data:', error);
        throw error;
    }
};

export const fetchWeather = async (locationKey) => {
    try {
        const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
            params: {
                apikey: API_KEY,
                metric: true, // For Celsius
            },
        });
        return response.data; // Return the forecast data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

export const fetchCurrentWeather = async (locationKey) => {
    try {
        const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
            params: {
                apikey: API_KEY,
            },
        });
        return response.data[0]; // Return the current weather data
    } catch (error) {
        console.error('Error fetching current weather data:', error);
        throw error;
    }
};

export const fetchCitySuggestions = async (query) => {
    try {
        const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete`, {
            params: {
                q: query,
                apikey: API_KEY,
            },
        });
        return response.data; // Return the suggestions
    } catch (error) {
        console.error('Error fetching city suggestions:', error);
        throw error;
    }
};

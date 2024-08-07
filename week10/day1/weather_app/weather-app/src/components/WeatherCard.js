import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function WeatherCard({ weatherData }) {
    const { city, weather } = weatherData;
    const { DailyForecasts } = weather;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(city.LocalizedName));
    }, [city.LocalizedName]);

    const handleToggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const newFavorites = favorites.filter(fav => fav !== city.LocalizedName);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            favorites.push(city.LocalizedName);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        setIsFavorite(!isFavorite);
    };

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getDay = (date) => {
        const day = new Date(date).getDay();
        return daysOfWeek[day];
    };

    return (
        <Card style={{ marginTop: '1em', padding: '20px', textAlign: 'center' }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`https://www.accuweather.com/images/weathericons/${DailyForecasts[0].Day.Icon}.svg`} alt="weather icon" style={{ width: '50px', height: '50px' }} />
                        <Typography variant="h5" style={{ marginLeft: '10px' }}>{city.LocalizedName}</Typography>
                    </div>
                    <Button variant="contained" color={isFavorite ? 'secondary' : 'primary'} onClick={handleToggleFavorite}>
                        {isFavorite ? 'Unfavorite' : 'Add to Favorites'}
                    </Button>
                </div>
                <Typography variant="body1" style={{ marginTop: '10px' }}>
                    {weather.Headline.Text}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '10px', fontSize: '24px' }}>
                    {DailyForecasts[0].Temperature.Maximum.Value}°C
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    {DailyForecasts.slice(1, 6).map((forecast, index) => (
                        <Card key={index} style={{ width: '100px', textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="body2">{getDay(forecast.Date)}</Typography>
                                <Typography variant="body2">{forecast.Temperature.Maximum.Value}°C</Typography>
                                <img src={`https://www.accuweather.com/images/weathericons/${forecast.Day.Icon}.svg`} alt="weather icon" style={{ width: '30px', height: '30px' }} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default WeatherCard;

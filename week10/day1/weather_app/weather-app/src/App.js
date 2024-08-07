import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Weather App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Weather
            </Button>
            <Button color="inherit" component={Link} to="/favorites">
              Favorites
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

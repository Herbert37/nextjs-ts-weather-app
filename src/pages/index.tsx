import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper, IconButton } from '@mui/material';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import FavoriteCities from '../components/FavoriteCities';
import { searchCities, getRandomCities } from '../utils/api';
import Menu from '../components/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';

interface City {
  id: number;
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
}

const Home: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    fetchRandomCities();
  }, []);

  const fetchRandomCities = async () => {
    const randomCities = await getRandomCities();
    setCities(randomCities);
  };

  const handleSearch = async (query: string) => {
    if (query.trim() === '') {
      fetchRandomCities();
    } else {
      const searchResults = await searchCities(query);
      setCities(searchResults);
    }
  };

  return (
    <>
      <Menu />
      <Header onSearch={handleSearch} />
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Cities
                <IconButton
                  sx={{
                    ml: '0.5rem',
                    mr: '1rem',
                    backgroundColor: 'rgb(0,0,0,0.3)'
                  }}
                  size='small'
                  color='secondary'
                  onClick={fetchRandomCities}
                >
                  <RefreshIcon />
                </IconButton> 
              </Typography>
              <Grid container spacing={2}>
                {cities.length > 0 ? (
                  cities.map((city) => (
                    <Grid item xs={12} sm={6} key={city.id}>
                      <WeatherCard city={city} />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Typography>No cities found. Try a different search.</Typography>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <FavoriteCities />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Movies.css';
import Header from './Header';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const moviesData = {
    category: 'movies',
    language: 'kannada',
    genre: 'all',
    sort: 'voting',
  };
  const performAPICall = async () => {
    try {
      const response = await axios.post(
        `https://hoblist.com/api/movieList`,
        moviesData
      );
      setMovies(response.data.result);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    performAPICall();
  }, []);

  return (
    <div>
      <Header />
      <Grid container>
        <Grid item className="movie-grid">
          <Grid container marginY="1rem" paddingX="1rem" spacing={2}>
            {movies.length > 0
              ? movies.map((movie) => (
                  <Grid item xs={12} sm={6} md={3} key={movie._id}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Movies;

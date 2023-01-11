import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Card
      className="card"
      style={{
        marginTop: '1%',
      }}
    >
      <Box style={{ padding: '0.5rem' }}>
        <CardActionArea sx={{ display: 'flex' }}>
          <CardContent>
            <ArrowDropUp sx={{ fontSize: 60 }} />
            <Typography>{movie.voted.length}</Typography>
            <ArrowDropDown sx={{ fontSize: 60 }} />
          </CardContent>
          <Box className="movie-poster">
            <img src={movie.poster} alt="poster" />
          </Box>
          <CardContent className="movie-detail">
            <Typography variant="h5" color="#212121">
              {movie.title}
            </Typography>
            <Typography>Genre: {movie.genre}</Typography>
            <Typography>Director: {movie.director}</Typography>
            <Typography>Starring: {movie.stars}</Typography>
            <Typography>{movie.language}</Typography>
            <Typography>
              {movie.pageViews} views | Voted by {movie.voted.length} People
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button variant="contained" fullWidth>
          Watch Trailer
        </Button>
      </Box>
    </Card>
  );
};

export default MovieCard;

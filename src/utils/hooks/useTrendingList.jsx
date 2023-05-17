import * as API from '../api/apiMovieDb';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(response => setMovies(response));
  }, []);

  return { trendingMovies };
};

import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import PropTypes from 'prop-types';

export const Movies = ({ movies }) => {
  const location = useLocation();

  if (!movies) {
    return <Loader />;
  }

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

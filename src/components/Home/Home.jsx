import React from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchPersons,
  fetchTvShows,
} from "features/movies/moviesSlice";
import { Loading, SliderArea } from "components/export";
/* funct */
const Home = () => {
  const dispatch = useDispatch();
  const {
    movies,
    tvShows,
    persons,
    moviesLoading,
    tvShowsLoading,
    personsLoading,
  } = useSelector((state) => state.movies);

  React.useEffect(() => {
    dispatch(fetchPersons());
    dispatch(fetchMovies());
    dispatch(fetchTvShows());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home-container">
        <SliderArea
          title="Trending movies this week"
          data={movies}
          loading={moviesLoading}
          type="movie"
        />
        <SliderArea
          title="Trending tv shows this week"
          data={tvShows}
          loading={tvShowsLoading}
          type="tv"
        />
        <SliderArea
          title="Trending persons this week"
          data={persons}
          loading={personsLoading}
          type="person"
        />
      </div>
      {moviesLoading && tvShowsLoading && personsLoading && <Loading />}
    </div>
  );
};

export default Home;

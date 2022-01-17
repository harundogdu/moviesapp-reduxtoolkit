import { MoviesService } from "common/api/MoviesService";
import React from "react";
import "./Home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* funct */
const Home = () => {
  const [movies, setMovies] = React.useState([]);
  const [tvShows, setTvShows] = React.useState([]);
  const [persons, setPersons] = React.useState([]);

  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };
  React.useEffect(() => {
    MoviesService.get(
      `trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    ).then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  React.useEffect(() => {
    MoviesService.get(
      `trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
    ).then(({ data }) => {
      setTvShows(data.results);
    });
  }, []);

  React.useEffect(() => {
    MoviesService.get(
      `trending/person/week?api_key=${process.env.REACT_APP_API_KEY}`
    ).then(({ data }) => {
      setPersons(data.results);
    });
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <h3>Trending movies this week</h3>
        <Slider className="slider" {...settings}>
          {movies.map((movie) => (
            <div className="home-container-item" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <span>{movie.title}</span>
            </div>
          ))}
        </Slider>
        <h3>Trending tv shows this week</h3>
        <Slider className="slider" {...settings}>
          {tvShows.map((tvShow) => (
            <div className="home-container-item" key={tvShow.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                alt={tvShow.name}
              />
              <span>{tvShow.name}</span>
            </div>
          ))}
        </Slider>
        <h3>Trending persons this week</h3>
        <Slider className="slider" {...settings}>
          {persons.map((person) => (
            <div className="home-container-item" key={person.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
              <span>{person.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useParams } from "react-router-dom";
import "./MoviesDetail.scss";
import { fetchMoviesDetails } from "features/details/detailsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillStar,
  AiOutlineFieldTime,
  AiOutlineCheck,
  AiOutlineClose,
  AiFillAppstore,
  AiOutlineLink,
} from "react-icons/ai";
import { Loading } from "components/export";
/* function */
const MoviesDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { details, loading } = useSelector((state) => state.details);
  const type = id.split("-")[0];
  React.useEffect(() => {
    dispatch(fetchMoviesDetails(id));
  }, [dispatch, id]);

  return (
    <div className="movies-detail">
      {loading ? (
        <Loading />
      ) : (
        <div className="movies-detail__container">
          <div className="movies-detail__container-content">
            <h1 className="movies-detail__container-content-title">
              {type === "movie" && details.original_title}
              {type === "tv" && details.name}
              {type === "person" && details.name}
            </h1>
            <div className="movies-detail__container-content-info">
              <div className="star">
                <AiFillStar className="icon" />
                <span>
                  {details.vote_average
                    ? details.vote_average
                    : details.popularity}
                </span>
              </div>
              <div className="date">
                <AiOutlineFieldTime className="icon" />
                <span>
                  {type === "movie" && details.release_date}
                  {type === "tv" && details.first_air_date}
                  {type === "person" && details.birthday}
                </span>
              </div>
              <div className="status">
                {details.status === "Released" ? (
                  <AiOutlineCheck className="icon" />
                ) : (
                  <AiOutlineClose className="icon" />
                )}
                <span>
                  {details.status
                    ? details.status
                    : details.deathday || "Not died"}
                </span>
              </div>
              <div className="genres">
                <AiFillAppstore className="icon" />
                {details.genres &&
                  details.genres.map((item, index) => (
                    <span key={index}>
                      {index === details.genres.length - 1
                        ? item.name
                        : `${item.name}, `}
                    </span>
                  ))}
                {details.known_for_department && (
                  <span>{details.known_for_department}</span>
                )}
              </div>
            </div>
            <div className="movies-detail__container-content-description">
              <p>{details.overview ? details.overview : details.biography}</p>
              {details.homepage && (
                <a href={details.homepage} target={"_blank"} rel="noreferrer">
                  Read More... <AiOutlineLink />
                </a>
              )}
            </div>
          </div>
          <div className="movies-detail__container-image">
            {type === "movie" && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                alt={details.original_title}
              />
            )}
            {type === "tv" && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                alt={details.original_title}
              />
            )}
            {type === "person" && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.profile_path}`}
                alt={details.original_title}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesDetail;

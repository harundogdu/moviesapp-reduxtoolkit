import { Settings } from "common/settings";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./SliderArea.scss";
import { Loading } from "components/export";
import DefaultImage from "images/default-image.jpg";
/* function */
const SliderArea = ({ title, data, loading }) => {
  const imageLast = (item) => {
    let baseURL = "https://image.tmdb.org/t/p/w500/";
    if (item.poster_path) {
      return (baseURL += item.poster_path);
    } else if (item.profile_path) {
      return (baseURL += item.profile_path);
    }
    return DefaultImage;
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="slider-area">
          <h3>{title}</h3>
          <Slider className="slider" {...Settings}>
            {data.map((item) => (
              <Link
                to={`/details/${item.media_type}-${item.id}`}
                className="home-container-item"
                key={item.id}
              >
                <img
                  src={imageLast(item)}
                  alt={item.title ? item.title : item.name}
                />
                <span>{item.title ? item.title : item.name}</span>
              </Link>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default SliderArea;

import { Settings } from "common/settings";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./SliderArea.scss";
import { Loading } from "components/export";
/* function */
const SliderArea = ({ title, data, loading, type }) => {
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
                to={`/details/${type}-${item.id}`}
                className="home-container-item"
                key={item.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    item.poster_path ? item.poster_path : item.profile_path
                  }`}
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

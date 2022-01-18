import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { SearchBox } from "components/export";
/* function */
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="header-title">
        <h1>MoviesApp</h1>
      </Link>
      <SearchBox />
      <a
        href="https://github.com/harundogdu"
        className="header-image"
        target={"_blank"}
        rel="noreferrer"
      >
        <img
          src="https://avatars.githubusercontent.com/u/43449361?v=4"
          alt="userImage"
        />
      </a>
    </div>
  );
};

export default Header;

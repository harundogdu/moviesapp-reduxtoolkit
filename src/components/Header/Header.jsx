import React from "react";
import "./Header.scss";
import UserImage from "images/user.png";
import { Link } from "react-router-dom";
/* function */
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="header-title">
        <h1>MoviesApp</h1>
      </Link>
      <div className="header-image">
        <img src={UserImage} alt="userImage" />
      </div>
    </div>
  );
};

export default Header;

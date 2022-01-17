import React from "react";
import "./Header.scss";
import UserImage from "images/user.png";
/* function */
const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>MoviesApp</h1>
      </div>
      <div className="header-image">
        <img src={UserImage} alt="userImage" />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">
        powered By <a href="https://www.themoviedb.org/">The Movie DB</a> |
        <a href="https://www.harundogdu.com" target="_blank" rel="noreferrer">
          Harun Dogdu
        </a>
        <span>© 2022</span>
      </div>
    </div>
  );
};

export default Footer;

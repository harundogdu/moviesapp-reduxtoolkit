import React from "react";
import "./NoFoundPage.scss";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const NoFoundPage = () => {
  return (
    <div className="nofoundpage">
      <h1>404 Page Not Found</h1>
      <h3>Sorry, the page you were looking for doesn't exist.</h3>
      <Link to="/">
        <AiOutlineLeft size={24} />
        Go back
      </Link>
    </div>
  );
};

export default NoFoundPage;

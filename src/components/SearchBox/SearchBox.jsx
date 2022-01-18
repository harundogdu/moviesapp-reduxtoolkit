import React from "react";
import "./SearchBox.scss";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBox = () => {
  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search any movie, tv show and person... "
      />
      <AiOutlineSearch size={18} />
    </div>
  );
};

export default SearchBox;

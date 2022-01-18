import React from "react";
import "./SearchBox.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchText } from "features/movies/moviesSlice";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") return;
    navigate(`/search/${searchText}`);
    dispatch(setSearchText(""));
  };
  return (
    <form action="" className="searchbox" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search any movie, tv show and person..."
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        required
      />
      <AiOutlineSearch size={18} />
    </form>
  );
};

export default SearchBox;

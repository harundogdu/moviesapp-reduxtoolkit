import React from "react";
import "./SearchList.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "features/movies/moviesSlice";
import { Loading, SliderArea } from "components/export";
import { AiOutlineLeft } from "react-icons/ai";
/* funtion */
const SearchList = () => {
  const dispatch = useDispatch();
  let { searchText } = useParams();
  const { searchList, searchLoading } = useSelector((state) => state.movies);
  console.log();
  React.useEffect(() => {
    dispatch(fetchSearch(searchText));
  }, [dispatch, searchText]);

  return (
    <div className="search-detail">
      {searchLoading && <Loading />}
      {searchList.length === 0 && (
        <div className="show-results-err">
          <h1>No results found...</h1>
          <Link to="/">
            <AiOutlineLeft size={14} />
            Go back
          </Link>
        </div>
      )}
      {searchList.length > 0 && (
        <>
          <div className="show-results">Showing results for your search...</div>
          <div className="home">
            <div className="home-container">
              <SliderArea
                title=""
                data={searchList}
                loading={searchLoading}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchList;

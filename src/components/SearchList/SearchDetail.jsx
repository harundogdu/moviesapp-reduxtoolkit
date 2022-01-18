import React from "react";
import "./SearchDetail.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "features/movies/moviesSlice";
import { Loading } from "components/export";
import { AiOutlineLeft } from "react-icons/ai";
const SearchDetail = () => {
  const dispatch = useDispatch();
  let { searchText } = useParams();
  const { searchList, searchLoading } = useSelector((state) => state.movies);
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
        <div className="show-results">Showing results for your search...</div>
      )}
      {searchList.length > 0 &&
        searchList.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default SearchDetail;

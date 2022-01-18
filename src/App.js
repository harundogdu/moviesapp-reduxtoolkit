import "./App.scss";
import {
  Header,
  Home,
  Footer,
  MoviesDetail,
  NoFoundPage,
  SearchList,
} from "components/export";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* function */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="details">
              <Route path=":id" element={<MoviesDetail />} />
            </Route>
            <Route path="search/:searchText" element={<SearchList />} />
            <Route path="*" element={<NoFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

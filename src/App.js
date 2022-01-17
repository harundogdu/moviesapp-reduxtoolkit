import "./App.scss";
import {
  Header,
  Home,
  Footer,
  Movies,
  MoviesDetail,
  NoFoundPage,
} from "components/export";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":detail" element={<MoviesDetail />} />
            <Route index element={<Movies />} />
          </Route>
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

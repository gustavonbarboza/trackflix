import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import MovieDetails from "./pages/PageDetails/MovieDetail";
import Movie from "./pages/Movies";

import SerieDetails from "./pages/PageDetails/SerieDetails";
import Serie from "./pages/Series";

import PeopleDetails from "./pages/PageDetails/PeopleDetails";
import People from "./pages/Person";

import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalStyle from "./styles/GlobalStyles";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search Results";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie" element={<Movie />} />

          <Route path="/tv/:id" element={<SerieDetails />} />
          <Route path="/tv" element={<Serie />} />

          <Route path="/person/:id" element={<PeopleDetails />} />
          <Route path="/person" element={<People />} />

          <Route path="/busca/:query" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  );

}

export default App;

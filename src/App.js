import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SerieDetails from "./pages/SerieDetails";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";
import NotFound from "./pages/NotFound";
import Search from "./pages/Home/Search";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<SerieDetails />} />
          <Route path="/busca/:query" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );

}

export default App;

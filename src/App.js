import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SerieDetails from "./pages/SerieDetails";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<MovieDetails />} />
          <Route path="/serie/id:" element={<SerieDetails />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
    </Router>
  );

}

export default App;

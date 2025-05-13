import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchButton, Banner, } from "./styles"
import TrendingSection from "../../components/TrendingSection"

function Home() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (busca.trim() !== "") {
      navigate(`/busca/${busca}`);
      setBusca("");
    }
  }

  return (
    <Container>
      <Banner />
      <form onSubmit={handleSubmit}>
        <SearchButton
          type="text"
          placeholder="Buscar filmes, séries ou pessoas"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        </form>
      <TrendingSection />
    </Container>
  );
}

export default Home;
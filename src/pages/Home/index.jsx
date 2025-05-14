import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchButton, Banner, BannerContainer } from "./styles"
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
      <form onSubmit={handleSubmit}>
        <SearchButton
          type="text"
          placeholder="Buscar filmes, séries ou pessoas"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </form>
      <Banner>
        <BannerContainer>
          <h1>Bem-vindo(a)</h1>
          <p>Descubra filmes, séries e muito mais</p>
        </BannerContainer>
      </Banner>
      <TrendingSection />
    </Container>
  );
}

export default Home;
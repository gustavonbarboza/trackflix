import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchButton, Banner, BannerContainer } from "./styles";
import TrendingSection from "../../components/TrendingSection";
import api from "../../services/api";

function Home() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();
  const [bannerFilme, setBannerFilme] = useState(null);

  // pegar imagem do banner
  useEffect(() => {
    async function fetchBanner() {
      try {
        const resposta = await api.get("/movie/popular");
        const filmes = resposta.data.results;
        const aleatorio = filmes[Math.floor(Math.random() * filmes.length)];
        setBannerFilme(aleatorio);
      } catch (erro) {
        console.error("Erro ao buscar banner:", erro);
      }
    }
    fetchBanner();
  }, []);

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

      {bannerFilme && bannerFilme.backdrop_path && (
        <Banner $image={`https://image.tmdb.org/t/p/original${bannerFilme.backdrop_path}`}>
          <BannerContainer>
            <h1>Bem-vindo(a)</h1>
            <p>Descubra filmes, séries e muito mais</p>
          </BannerContainer>
        </Banner>
      )}
      <TrendingSection />
    </Container>
  );
}

export default Home;
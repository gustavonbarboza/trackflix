import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchButton } from "./styles"

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
    </Container>
  );
}

export default Home;
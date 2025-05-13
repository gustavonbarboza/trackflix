import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Movies from "./Movies"
import Series from "./Series"
import { Container, Tabs, Tab} from "./styles"

function Home() {
  const [abaAtiva, setAbaAtiva] = useState("filmes");
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
        <input
          type="text"
          placeholder="Buscar filmes, séries ou pessoas"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </form>
      <Tabs>
        <Tab onClick={() => setAbaAtiva("filmes")} $ativo={abaAtiva === "filmes"}>
          🎬 Filmes
        </Tab>
        <Tab onClick={() => setAbaAtiva("series")} $ativo={abaAtiva === "series"}>
          🎬 Séries
        </Tab>
      </Tabs>

      {abaAtiva === "filmes" ? <Movies /> : <Series />}
    </Container>
  );
}

export default Home;
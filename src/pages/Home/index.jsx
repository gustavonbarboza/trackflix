import { useState } from "react";
import Movies from "./Movies"
import Series from "./Series"
import { Container, Tabs, Tab} from "./styles"

function Home() {
  const [abaAtiva, setAbaAtiva] = useState("filmes");

  return (
    <Container>
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
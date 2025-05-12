import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      const resposta = await api.get("./movie/popular");
      setFilmes(resposta.data.results);
    }

    carregarFilmes();
  }, []);

  return (
    <div>
      <h1>Filmes Populares</h1>
      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>{filme.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
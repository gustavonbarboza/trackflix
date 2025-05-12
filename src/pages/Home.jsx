import { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

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
      <Title>Filmes Populares</Title>
      <Grid>
          {filmes.map((filme) => (
            <MovieCard key={filmes.id} filme={filme}/>
          ))};
      </Grid>
    </div>
  );
}

export default Home;
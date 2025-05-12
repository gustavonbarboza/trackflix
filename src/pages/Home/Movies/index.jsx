import { useEffect, useState } from "react";
import api from "../../../services/api";
import MovieCard from "../../../components/Card";
import { Container, Title, Grid } from "../Movies/styles"

function Movies() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      const resposta = await api.get("./movie/popular");
      setFilmes(resposta.data.results);
    }
    carregarFilmes();
  }, []);

  return (
    <Container>
      <Title>Filmes Populares</Title>
      <Grid>
          {filmes.map((filme) => (
            <MovieCard key={filme.id} filme={filme}/>
          ))}
      </Grid>
    </Container>
  );
}

export default Movies;
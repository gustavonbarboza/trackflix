import { useEffect, useState } from "react";
import api from "../../services/api";
import MovieCard from "../../components/CardDefault";
import { Container, Title, Grid, Button } from "../Movies/styles"

function Movies() {
  const [filmes, setFilmes] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const resposta = await api.get(`/movie/popular?page=${pagina}`);
        
        setFilmes((prevFilmes) => {
          const novosFilmes = resposta.data.results.filter(
            (novo) => !prevFilmes.some((f) => f.id === novo.id)
          );
          return [...prevFilmes, ...novosFilmes];
        });
  
      } catch (erro) {
        console.error("Erro ao carregar filmes:", erro);
      }
    }
  
    carregarFilmes();
  }, [pagina]);

  const carregarMais = () => {
    setPagina((prevPagina) => prevPagina + 1);
  };

  return (
    <Container>
      <Title>Filmes Populares</Title>
      <Grid>
          {filmes.map((filme) => (
            <MovieCard key={filme.id} filme={filme} tipo="movie"/>
          ))}
          <Button onClick={carregarMais}>Carregar mais</Button>
      </Grid>
    </Container>
  );
}

export default Movies;
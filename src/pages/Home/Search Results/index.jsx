import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, Title, Grid, Card} from "./styles";
import semImagem from "../../../assets/images/sem-imagem.png"

function Search() {
  const { query } = useParams();
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function buscar() {
      try {
        const resposta = await api.get(`/search/multi?query=${query}`);
        setResultados(resposta.data.results);
      } catch (erro) {
        console.error("Erro na busca: ", erro);
      }
    }

    buscar();
  }, [query]);

  return (
    <Container>
      <Title>Resultados para: "{query}"</Title>
      <Grid>
      {resultados.map((item) => (
          <Card> 
            <img
              src={
                item.poster_path || item.profile_path
                  ? `https://image.tmdb.org/t/p/w300${item.poster_path || item.profile_path}`
                  : semImagem
              }
              alt={item.title || item.name}
            />
            <h3>{item.title || item.name}</h3>
            <p>
              {item.media_type === "movie" 
                ? "Filme"
                : item.media_type === "tv"
                ? "Série"
                : item.media_type === "person"
                ? "Pessoa"
              : "" }
            </p>
          </Card>
      ))}
      </Grid>
    </Container>
  );
}

export default Search

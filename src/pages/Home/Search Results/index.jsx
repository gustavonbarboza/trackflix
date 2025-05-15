import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, Title, Grid } from "./styles";
import Card from "../../../components/DefaultCard";

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
            <Card key={item.id} filme={item} tipo={item.media_type} />
        ))}
      </Grid>
    </Container>
  );
}

export default Search

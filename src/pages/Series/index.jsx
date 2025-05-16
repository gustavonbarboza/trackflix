import { useEffect, useState } from "react";
import api from "../../services/api";
import SerieCard from "../../components/CardDefault";
import { Container, Title, Grid, Button } from "../Movies/styles"

function Series() {
  const [series, setSeries] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function carregarSeries() {
      try {
        const resposta = await api.get(`/tv/top_rated?page=${pagina}`);
        
        setSeries((prevSeries) => {
          const novasSeries = resposta.data.results.filter(
            (novo) => !prevSeries.some((f) => f.id === novo.id)
          );
          return [...prevSeries, ...novasSeries];
        });
      } catch (erro) {
        console.error("Erro ao carregar filmes:", erro);
      }
    }
    carregarSeries();
  }, [pagina]);


  const carregarMais = () => {
    setPagina((prevPagina) => prevPagina + 1);
  };

  return (
    <Container>
      <Title>Series Populares</Title>
      <Grid>
        {series.map((series) => (
          <SerieCard key={series.id} filme={series} tipo="tv"/>
        ))}
        <Button onClick={carregarMais}>Carregar mais</Button>
      </Grid>
  </Container>
  );
}

export default Series;

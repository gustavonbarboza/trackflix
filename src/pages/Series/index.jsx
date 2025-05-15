import { useEffect, useState } from "react";
import api from "../../services/api";
import SerieCard from "../../components/DefaultCard";
import { Container, Title, Grid } from "../Series/styles"

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function carregarSeries() {
      const resposta = await api.get("./tv/popular");
      setSeries(resposta.data.results);
    } 

    carregarSeries();
  }, []);

  return (
    <Container>
    <Title>Series Populares</Title>
    <Grid>
        {series.map((serie) => (
          <SerieCard key={serie.id} filme={serie} tipo="tv"/>
        ))}
    </Grid>
  </Container>
  );
}

export default Series;

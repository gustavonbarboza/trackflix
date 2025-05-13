import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Title, Grid } from "./styles"

function People() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    async function carregarPessoas() {
      const resposta = await api.get("/person/popular");
      setPessoas(resposta.data.results);
    } 

    carregarPessoas();
  }, []);

  return (
    <Container>
    <Title>Pessoas Populares</Title>
    <Grid>
        {pessoas.map((pessoa) => (
          <SerieCard key={pessoa.id} filme={pessoa} tipo="person"/>
        ))}
    </Grid>
  </Container>
  );
}

export default People;

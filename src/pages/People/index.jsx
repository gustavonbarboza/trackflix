import { useEffect, useState } from "react";
import api from "../../services/api";
import PeopleCard from "../../components/CardDefault";
import { Container, Title, Grid, Button } from "./styles";

function People() {
  const [pessoas, setPessoas] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function carregarPessoas() {
      try {
        const resposta = await api.get(`/person/popular?page=${pagina}`);
        
        setPessoas((prevAtores) => {
          const novosAtores = resposta.data.results.filter(
            (novo) => !prevAtores.some((f) => f.id === novo.id)
          );
          return [...prevAtores, ...novosAtores];
        });
  
      } catch (erro) {
        console.error("Erro ao carregar filmes:", erro);
      }
    }
  
    carregarPessoas();
  }, [pagina]);

  const carregarMais = () => {
    setPagina((prevPagina) => prevPagina + 1);
  };

  return (
    <Container>
    <Title>Pessoas Populares</Title>
    <Grid>
        {pessoas.map((pessoa) => (
          <PeopleCard key={pessoa.id} filme={pessoa} tipo="person"/>
        ))}
        <Button onClick={carregarMais}>Carregar mais</Button>
    </Grid>
  </Container>
  );
}

export default People;

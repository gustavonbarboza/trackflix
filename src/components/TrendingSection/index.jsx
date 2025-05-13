import { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, Title, ScrollContainer, Button, ButtonGroup, Header } from "./styles"
import Card from "../Card"

function TrendingSection() {
  const [tendencias, setTendencias] = useState([]);
  const [timeWindow, setTimeWindow] = useState('day');

  useEffect (() => {
    async function carregarTendencias() {
      try {
        const resposta = await api.get(`/trending/all/${timeWindow}`);
        setTendencias(resposta.data.results);
      } catch (erro) {
        console.error("Erro ao carregar tendências: ", erro);
      }
    }

    carregarTendencias();
  }, [timeWindow]);

  return (
    <Container>
      <Header>
        <Title>Tendência</Title>
        <ButtonGroup>
          <Button onClick={() => setTimeWindow('day')} active={timeWindow === 'day'}>Hoje</Button>
          <Button onClick={() => setTimeWindow('week')} active={timeWindow === 'week'}>Semana</Button>
        </ButtonGroup>
      </Header>

      <ScrollContainer>
        {tendencias.map((item) => (
          <Card key={item.id} filme={item} tipo={item.media_type} />
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default TrendingSection;
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container } from "./styles";

function DetailsPeople() {
  const { id } = useParams();
  const [pessoas, setPessoas] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function carregarDetalhes() {
      try {
        const resposta = await api.get(`/person/${id}`);
        setPessoas(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar série: ", erro);
        navigate("/notfound");
      }
    }

    carregarDetalhes()
  }, [id, navigate]);

  if (!pessoas) return <p>Carregando...</p>;
  
  return (
    <Container>
      <h1>{pessoas.name}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500${pessoas.poster_path}`}
        alt={pessoas.name}
      />
      <p><strong>Sinopse:</strong> {pessoas.overview}</p>
      <p><strong>Nota:</strong> {pessoas.vote_average}</p>
      <p><strong>Data de lançamento:</strong> {pessoas.first_air_date}</p>
    </Container>
  ); 
}

export default DetailsPeople;
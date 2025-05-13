import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

function DetailsSerie() {
  const { id } = useParams();
  const [serie, setSeries] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function carregarDetalhes() {
      try {
        const resposta = await api.get(`/tv/${id}`);
        setSeries(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar série: ", erro);
        navigate("/notfound");
      }
    }

    carregarDetalhes()
  }, [id, navigate]);

  if (!serie) return <p>Carregando...</p>;
  
  return (
    <Container>
      <h1>{serie.name}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
        alt={serie.name}
      />
      <p><strong>Sinopse:</strong> {serie.overview}</p>
      <p><strong>Nota:</strong> {serie.vote_average}</p>
      <p><strong>Data de lançamento:</strong> {serie.first_air_date}</p>
    </Container>
  ); 
}

export default DetailsSerie;
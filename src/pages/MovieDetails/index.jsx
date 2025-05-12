import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";

function Details() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  
  useEffect(() => {
    async function carregarDetalhes() {
      const resposta = await api.get(`/movie/${id}`);
      setFilme(resposta.data);
    }

    carregarDetalhes()
  }, [id]);

  if (!filme) return <p>Carregando...</p>;
  
  return (
    <Container>
      <h1>{filme.title}</h1>
      <img 
      src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
      alt={filme.title}
      />
      <p><strong>Sinopse:</strong> {filme.overview}</p>
      <p><strong>Nota:</strong> {filme.vote_average}</p>
      <p><strong>Data de lançamento:</strong> {filme.realease_date}</p>
    </Container>
  ); 
}

export default Details;
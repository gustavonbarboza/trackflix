import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, Grid } from "./styles";
import { formatarData } from "../../../components/utils/formatDate";
import { useCast } from "../../../hooks/useCast";
import Card from "../../../components/Card";

function DetailsMovie() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const { cast } = useCast(id, "movie");
  const navigate = useNavigate();
  
  useEffect(() => {
    async function carregarDetalhes() {
      try {
        const resposta = await api.get(`/movie/${id}`);
        setFilme(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar filme: ", erro);
        navigate("/notfound");
      }
    }

    carregarDetalhes()
  }, [id, navigate]);

  if (!filme) return <p>Carregando...</p>;

  return (
    <>
      <Container>
        <h1>{filme.title}</h1>
        <img 
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
        />
        <p><strong>Sinopse:</strong> {filme.overview}</p>
        <p><strong>Nota:</strong> {filme.vote_average}</p>
        <p><strong>Data de lançamento:</strong> {formatarData(filme.release_date)}</p>      
        <Grid>
          <h3>Elenco Principal</h3>
          {cast.map((actor) => (
            <Card key={actor.id} filme={actor} tipo="person"/>
          ))}
        </Grid>
      </Container>

    </>
  ); 
}

export default DetailsMovie;
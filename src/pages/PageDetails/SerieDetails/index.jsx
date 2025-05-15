import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, Grid } from "./styles";
import { formatarData } from "../../../components/utils/formatDate";
import Card from "../../../components/Card";
import { useCast } from "../../../hooks/useCast";
import semImagem from "../../../assets/images/sem-imagem.png"

function DetailsSerie() {
  const { id } = useParams();
  const [serie, setSeries] = useState(null);
  const navigate = useNavigate();
  const { cast } = useCast(id, "tv");
  
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
        src={serie.poster_path ? `https://image.tmdb.org/t/p/w500${serie.poster_path}` : semImagem}
        alt={serie.name}
      />
      <p><strong>Sinopse:</strong> {serie.overview}</p>
      <p><strong>Nota:</strong> {serie.vote_average}</p>
      <p><strong>Data de lançamento:</strong> {formatarData(serie.first_air_date)}</p>
      <Grid>
          <h3>Elenco Principal</h3>
          {cast.map((actor) => (
            <Card key={actor.id} filme={actor} tipo="person"/>
          ))}
        </Grid>
    </Container>
  ); 
}

export default DetailsSerie;
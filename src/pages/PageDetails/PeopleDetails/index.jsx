import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, Grid } from "./styles";
import { formatarData } from "../../../utils/formatDate";
import { useCredits } from "../../../hooks/carregarFilmesAtor";
import Card from "../../../components/DefaultCard";
import semImagem from "../../../assets/images/sem-imagem.png"

function DetailsPeople() {
  const { id } = useParams();
  const [pessoas, setPessoas] = useState(null);
  const navigate = useNavigate();
  const { credits } = useCredits(id)
  
  useEffect(() => {
    async function carregarDetalhes() {
      try {
        const resposta = await api.get(`/person/${id}`);
        setPessoas(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar pessoa: ", erro);
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
        src={pessoas.profile_path ? `https://image.tmdb.org/t/p/w500${pessoas.profile_path}` : semImagem}
        alt={pessoas.name}
      />
      <p><strong>Biografia:</strong> {pessoas.biography}</p>
      <p><strong>Data de Nascimento:</strong> {formatarData(pessoas.birthday)}</p>
      <Grid>
          <h3>Conhecido(a) por</h3>
          {credits.map((item) => (
            <Card key={item.id} filme={item} tipo={item.media_type}/>
          ))}
        </Grid>
    </Container>
  ); 
}

export default DetailsPeople;

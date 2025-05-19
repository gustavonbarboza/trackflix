import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, DetailsActor, Poster, Content, TitleContainer, Title, Biografia, InfoSection, ToggleButton,Highlight, Grid, ScrollContainer } from "./styles";
import { useCredits } from "../../../hooks/carregarFilmesAtor";
import Card from "../../../components/CardMoviesDetail";
import semImagem from "../../../assets/images/sem-imagem.png"
import { formatarData } from "../../../utils/formatDate";

function DetailsPeople() {
  const { id } = useParams();
  const [pessoas, setPessoas] = useState(null);
  const navigate = useNavigate();
  const { credits } = useCredits(id);
  const [showFullBio, setShowFullBio] = useState(false);
  
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

        <DetailsActor>
          <Poster 
            src={pessoas.profile_path ? `https://image.tmdb.org/t/p/w500${pessoas.profile_path}` : semImagem}
            alt={pessoas.name}
            />

          <Content>

            <TitleContainer>
              <Title>{pessoas.name}</Title>
            </TitleContainer>

            <Biografia $expandido={showFullBio}>
              <Highlight>Biografia</Highlight>
              {pessoas.biography}
            </Biografia>
            {pessoas.biography.length > 400 && (
              <ToggleButton onClick={() => setShowFullBio(!showFullBio)}>
                {showFullBio ? "Mostrar menos" : "Saiba mais"}
              </ToggleButton>
            )}

            <InfoSection>
              <p><strong>Gênero:</strong> {pessoas.gender === 1 
                ? "Feminino" 
                : pessoas.gender === 2 
                ? "Masculino" 
                : "Não especificado"}
              </p>

              <p><strong>Nascimento:</strong> {formatarData(pessoas.birthday) || "Não informado"}</p>
            </InfoSection>


          <Grid>
            <h3>Conhecido(a) por</h3>
            <ScrollContainer>
              {credits.map((item) => (
                <Card key={item.id} filme={item} tipo={item.media_type}/>
              ))}
            </ScrollContainer>   
          </Grid>

          </Content>
          
        </DetailsActor>

    </Container>
  ); 
}

export default DetailsPeople;

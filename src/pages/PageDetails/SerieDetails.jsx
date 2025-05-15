import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, DetailsMovies, Poster, Content, TitleContainer, SubTitle, Title, SubInfo, Sinopse, ReleaseDate, Highlight, Score, Grid, ScrollContainer } from "./styles";
import { formatarData } from "../../components/utils/formatDate";
import PersonCard from "../../components/CardPageDetails";
import { useCast } from "../../hooks/useCast";
import semImagem from "../../assets/images/sem-imagem.png"

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

    <DetailsMovies
      $bgImage={serie.poster_path ? `https://image.tmdb.org/t/p/original${serie.poster_path}` : semImagem}
    >
      <Poster 
          src={serie.poster_path ? `https://image.tmdb.org/t/p/w300${serie.poster_path}` : semImagem}
          alt={serie.title}
        />

      <Content>
        <TitleContainer>
          <Title>{serie.name}</Title>
          <SubTitle>({serie.first_air_date.substring(0, 4)})</SubTitle>
        </TitleContainer>

        <SubInfo>{serie.genres?.map(g => g.name).join(', ')}</SubInfo>

        <Score>Nota: {serie.vote_average.toFixed(1)}</Score>

        <Sinopse>
          <Highlight>Sinopse</Highlight>
          {serie.overview}
        </Sinopse>

        <ReleaseDate>
          <Highlight>Data de lançamento</Highlight>
            {formatarData(serie.first_air_date)}
        </ReleaseDate>

      </Content>
    </DetailsMovies>

    <Grid>
      <h3>Elenco Principal</h3>
      <ScrollContainer>
          {cast.map((actor) => (
            <PersonCard key={actor.id} person={actor} />
          ))}
      </ScrollContainer>   
    </Grid>

  </Container>
  ); 
}

export default DetailsSerie;
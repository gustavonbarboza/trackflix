import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Container, DetailsMovies, Poster, Content, TitleContainer, SubTitle, Title, SubInfo, Sinopse, Highlight, Score, Grid, ScrollContainer } from "./styles";
import Card from "../../../components/Card";
import { formatarData } from "../../../components/utils/formatDate";
import { useCast } from "../../../hooks/useCast";
import semImagem from "../../../assets/images/sem-imagem.png"

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

        <DetailsMovies
          bgImage={filme.poster_path ? `https://image.tmdb.org/t/p/original${filme.poster_path}` : semImagem}
        >
          <Poster 
              src={filme.poster_path ? `https://image.tmdb.org/t/p/w300${filme.poster_path}` : semImagem}
              alt={filme.title}
            />

          <Content>
            <TitleContainer>
              <Title>{filme.title}</Title>
              <SubTitle>({filme.release_date?.substring(0, 4)})</SubTitle>
            </TitleContainer>

            <SubInfo>{filme.genres?.map(g => g.name).join(', ')}</SubInfo>

            <Score>Nota: {filme.vote_average.toFixed(1)}</Score>

            <Sinopse>
              <Highlight>Sinopse</Highlight>
              {filme.overview}
            </Sinopse>

            <p><Highlight>Data de lançamento</Highlight> {formatarData(filme.release_date)}</p>
          </Content>
        </DetailsMovies>

        <Grid>
          <h3>Elenco Principal</h3>
          <ScrollContainer>
              {cast.map((actor) => (
                <Card key={actor.id} filme={actor} tipo="person"/>
              ))}
          </ScrollContainer>   
        </Grid>

      </Container>
    </>
  ); 
}

export default DetailsMovie;

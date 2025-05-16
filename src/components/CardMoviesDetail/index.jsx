import { Card, Poster, Title, SubTitle } from "./styles";
import { Link } from "react-router-dom";
import semImagem from "../../assets/images/sem-imagem.png";
import { formatarData } from "../../utils/formatDate";

function CardSections({ filme, tipo = "movie" }) {
  return (
    <Link to={`/${tipo}/${filme.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <Poster
          src={
            filme.poster_path
              ? `https://image.tmdb.org/t/p/w300${filme.poster_path}`
              : semImagem
          }
          alt={filme.title || filme.name}
        />
        <Title>{filme.title || filme.name}</Title>
        <SubTitle>
          {tipo === "movie"
            ? formatarData(filme.release_date)
            : tipo === "tv"
            ? formatarData(filme.first_air_date)
            : ""}
        </SubTitle>
      </Card>
    </Link>
  );
}

export default CardSections;
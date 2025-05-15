import { Card, Poster, Title, SubTitle } from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import semImagem from "../.././assets/images/sem-imagem.png"
import { formatarData } from "../../components/utils/formatDate";

function CardSections({ filme, tipo = "movie" }) {
  return (
    <Link to={`/${tipo}/${filme.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <Poster
          src={
            (tipo === "person" && filme.profile_path) || (tipo !== "person" && filme.poster_path)
              ? `https://image.tmdb.org/t/p/w300${
                  tipo === "person" ? filme.profile_path : filme.poster_path
                }`
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
            : tipo === "person"
            ? filme.known_for.slice(0, 2).map((item, index) => (
              <span key={index}>
                {item.title || item.name}
                {index < 1 && ", "}
              </span>
            ))
            : "Obras desconhecidas"
          }
        </SubTitle>
      </Card>
    </Link>
  );
}

export default CardSections;
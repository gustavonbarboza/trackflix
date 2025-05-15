import styled from "styled-components";

export const Container = styled.div`
  color: white;

`;

export const DetailsMovies = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  padding: 14px 150px 14px 150px;
  position: relative;

  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(28, 28, 28,0.95); // ajuste a opacidade como preferir
    z-index: 0;
  }

  > * {
    position: relative;
  }
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: 8px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 300;
`;

export const SubInfo = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 20px;
`;

export const Sinopse = styled.p`
  margin-top: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
`

export const Highlight = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Score = styled.span`
  background: #2e2e2e;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  max-width: max-content;
`;


export const Grid = styled.div`
  background-color: #2e2e2e;
  display: flex;
  flex-wrap: wrap;
  padding: 14px 150px 14px 150px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;



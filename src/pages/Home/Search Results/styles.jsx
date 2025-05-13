import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  color: white;
`;

export const Title = styled.h2 `
  margin-bottom: 20px;
`;

export const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1rem;
  }
`;
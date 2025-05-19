import styled from "styled-components";

export const Container = styled.div`
  padding: 14px 150px 14px 150px;
  color: white;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h2 `
  margin-bottom: 20px;
`;

export const Grid = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;
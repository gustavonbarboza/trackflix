import styled from "styled-components";

export const Container = styled.div`
  padding: 14px 150px 14px 150px;
  color: white;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #e50914;
  color: white;
  border: none; 
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;
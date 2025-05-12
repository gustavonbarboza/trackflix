import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  color: white;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Tab = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ $ativo }) => ($ativo ? "#e50914" : "#333")};
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e50914;
  }
`;
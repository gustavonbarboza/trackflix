import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  margin: 0px 150px 0px 150px;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  background-color: ${({ $active }) => ($active ? '#e50914' : '#A9A9A9')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $active }) => ($active ? '#b00610' : '#f0f0f0')};
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;

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
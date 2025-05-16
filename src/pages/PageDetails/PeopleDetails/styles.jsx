import styled from "styled-components";

export const Container = styled.div`
  color: white;
`;

export const DetailsActor = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  padding: 14px 150px 14px 150px;
  position: relative;
`;

export const Poster = styled.img`
  width: 500px;
  border-radius: 8px;
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  min-width: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;


export const Biografia = styled.div`
  margin-top: 20px;
  line-height: 1.5;
  margin-bottom: 10px;
  max-height: ${({ $expandido }) => ($expandido ? "none" : "6em")};
  overflow: hidden;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;

export const Highlight = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const Grid = styled.div`
  margin-top: 30px;
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

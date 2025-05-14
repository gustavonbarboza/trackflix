import api from "../services/api";
import { useEffect, useState } from "react";

export function useCredits(personId) {
  const [ credits, setCredits ] = useState([]);

  useEffect(() => {
    async function carregarFilmesAtor() {
      try {
        const response = await api.get(`/person/${personId}/combined_credits`);
        setCredits(response.data.cast.slice(0, 10));
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      } 
    }

    if (personId) {
      carregarFilmesAtor();
    }
  }, [personId]);

  return { credits };
}

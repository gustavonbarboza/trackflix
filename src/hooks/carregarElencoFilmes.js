import { useEffect, useState } from 'react';
import api from '../services/api';

export function useCast(id, type = "movie") {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function carregarElencoFilmes() {
      try {
        const response = await api.get(`/${type}/${id}/credits`);
        setCast(response.data.cast.slice(0, 10));
      } catch (error) {
        console.error('Erro ao buscar elenco:', error);
      } 
    }

    if (id) {
      carregarElencoFilmes();
    }
  }, [id, type]);

  return { cast };
}
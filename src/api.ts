import axios from 'axios';

const BASE_URL = 'https://api.mpg.football/api/data';

export interface Club {
  id: string;
  name: string;
  // Ajoutez d'autres propriétés du club si nécessaire
}

export interface Player {
  id: string;
  firstName: string;
  ultraPosition: string;
  // Ajoutez d'autres propriétés du joueur si nécessaire
}

export interface PlayerDetail {
  // Définissez les propriétés de détail du joueur selon l'API
}

export const getClubs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/championship-clubs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching clubs:', error);
    throw error;

  }
};

export const getPlayers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/championship-players-pool/1`);
    return response.data.poolPlayers;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

export const getPlayerDetail = async (playerId: string, year: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/championship-player-stats/${playerId}/${year}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching player detail:', error);
    throw error;
  }
};

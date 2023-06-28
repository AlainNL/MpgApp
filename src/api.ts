import axios from 'axios';

const BASE_URL = 'https://api.mpg.football/api/data';

export interface Club {
  id: string;
  name: string;
}

export interface Player {
  id: string;
  firstName: string;
  ultraPosition: string;

}

export interface PlayerDetail {

}

export const getClubs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/championship-clubs`);
    console.log(response.data.championshipClubs);
    return [response.data.championshipClubs];
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

export const getPlayerDetail = async (playerId: string, year: number): Promise<PlayerDetail> => {
  try {
    const response = await axios.get(`https://api.mpg.football/api/data/championship-player-stats/${playerId}/${year}`);
    return response.data.player;
  } catch (error) {
    throw new Error('Failed to fetch player detail');
  }
};

// Fonction pour mapper l'id ultraPosition à la position correspondante
export const mapUltraPositionToPosition = (ultraPositionId: number): string => {
  switch (ultraPositionId) {
    case 10:
      return 'Gardien';
    case 20:
      return 'Défenseur';
    case 21:
      return 'Latéral';
    case 30:
      return 'Milieu défensif';
    case 31:
      return 'Milieu offensif';
    case 40:
      return 'Attaquant';
    default:
      return '';
  }
};

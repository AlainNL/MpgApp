import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getPlayerDetail, PlayerDetail, mapUltraPositionToPosition } from '../api';

interface PlayerDetailScreenProps {
  route: any;
}

const PlayerDetailScreen: React.FC<PlayerDetailScreenProps> = ({ route }) => {
  const [playerDetail, setPlayerDetail] = useState<PlayerDetail | null>(null);

  useEffect(() => {
    const { playerId } = route.params;
    fetchPlayerDetail(playerId);
  }, []);

  const fetchPlayerDetail = async (playerId: string) => {
    try {
      const data = await getPlayerDetail(playerId, 2022);
      setPlayerDetail(data);
    } catch (error) {
      console.error('Error fetching player detail:', error);
    }
  };

  if (!playerDetail) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* Display other player details */}
    </View>
  );
};

export default PlayerDetailScreen;

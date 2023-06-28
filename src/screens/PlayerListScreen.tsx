import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Button } from 'react-native';
import { getPlayers, Player, mapUltraPositionToPosition } from '../api';

interface PlayerListScreenProps {
  navigation: any;
}

const PlayerListScreen: React.FC<PlayerListScreenProps> = ({ navigation }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const data = await getPlayers();
      setPlayers(data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handlePlayerPress = (player: Player) => {
    navigation.navigate('PlayerDetail', { playerId: player.id });
  };

  return (

    <View>
      <Button
        title="Go to Club List"
        onPress={() =>
          navigation.navigate('ClubDetail', {name: 'ClubDetail'})
        }
      />
      {players.map((player) => (
        <TouchableOpacity key={player.id} onPress={() => handlePlayerPress(player)}>
          <View>
            {Object.entries(player).map(([key, value]) => (
              <Text key={key}>{`${key}: ${value}`}</Text>
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PlayerListScreen;

import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

// Remplacez le chemin d'importation ci-dessous par votre propre implémentation pour récupérer les données des joueurs
import { getPlayers, Player } from '../api';

interface PlayerListScreenProps {
  navigation: any;
}

const PlayerListScreen: React.FC<PlayerListScreenProps> = ({ navigation }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const data = await getPlayers(); // Utilisez votre propre implémentation pour récupérer les données des joueurs
      setPlayers(data); // Mise à jour de "players" avec les données reçues
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handlePlayerPress = (player: Player) => {
    navigation.navigate('PlayerDetail', { playerId: player.id });
  };

  const renderItem = ({ item }: { item: Player }) => (
    <TouchableOpacity onPress={() => handlePlayerPress(item)}>
      <View>
        <Text>{item.firstName}</Text>
        <Text>{item.ultraPosition}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PlayerListScreen;

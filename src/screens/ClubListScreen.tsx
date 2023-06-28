import React, { useEffect, useState } from 'react';
import { View, Text, Button} from 'react-native';
import { Club, getClubs } from '../api';

interface ClubListScreenProps {
  navigation: any;
}

const ClubListScreen: React.FC<ClubListScreenProps> = ({ navigation }) => {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const data = await getClubs();
      setClubs(data);
    } catch (error) {
      console.error('Error fetching clubs:', error);
    }
  };

  return (
    <View>
      <Button
        title="Player List"
        onPress={() =>
          navigation.navigate('PlayerList', {name: 'PlayerList'})
        }
      />
      {clubs.map((club) => (
        <View key={club.id}>
          <Text>{JSON.stringify(club)}</Text>
        </View>
      ))}
    </View>
  );
};

export default ClubListScreen;

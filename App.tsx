import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayerListScreen from './src/screens/playerListScreen';
import PlayerDetailScreen from './src/screens/PlayerDetailScreen';
import ClubListScreen from './src/screens/ClubListScreen';


const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ClubDetail" component={ClubListScreen} />
        <Stack.Screen name="PlayerList" component={PlayerListScreen} />
        <Stack.Screen name="PlayerDetail" component={PlayerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

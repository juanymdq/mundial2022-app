import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen'
import TeamsScreen from '../equipos/ListTeams'
import CalendarScreen from '../fixture/Calendario'
import ResultsScreen from '../fixture/Posiciones'

const MainStack = createStackNavigator();

const MainScreen = () => {

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen name="TeamsScreen" component={TeamsScreen} />
        <MainStack.Screen name="CalendarScreen" component={CalendarScreen} />
        <MainStack.Screen name="ResultsScreen" component={ResultsScreen} />
   </MainStack.Navigator>
  );  
}

export default MainScreen
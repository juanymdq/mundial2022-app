import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../home/HomeScreen'
import LogOutScreen from '../salir/LogOutScreen'

const MainScreen = () => {

  const Tab = createBottomTabNavigator();     

  return (    
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#D9F99D',
        tabBarInactiveBackgroundColor: '#DCFCE7',
            style: {
                  backgroundColor: '#DCFCE7',
                  paddingBottom: 3
            }
      }}    
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => (
            <Icon name="home" size={30}/>
          ),
        }}        
      />      
      
      <Tab.Screen 
        name="LogOut"
        component={LogOutScreen}      
        options={{
          tabBarLabel: 'Salir',
          tabBarIcon: () => (
            <Icon name="logout" size={30}/>
          ),      
        }}
      />
    </Tab.Navigator>       
  )
}

export default MainScreen
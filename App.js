/**
 * JIF
 * CREADO 14/09/2022
 */

import React from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import InicialScreen from './screens/inicial/InicialScreen'
import MainScreen from './screens/Main/MainScreen'
import LogOutScreen from './screens/salir/LogOutScreen'
import Calendario from './screens/fixture/Calendario'
import Posiciones from './screens/fixture/Posiciones'

import store from './src/store'

const AppStack = createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>     
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <AppStack.Screen name="Inicial" component={InicialScreen} />
        <AppStack.Screen name="MainScreen" component={MainScreen} />
        <AppStack.Screen name="Calendario" component={Calendario} />
        <AppStack.Screen name="Posiciones" component={Posiciones} />
        <AppStack.Screen name="LogOutScreen" component={LogOutScreen} />
      </AppStack.Navigator>
    </NavigationContainer>      
  </Provider>
  );
}


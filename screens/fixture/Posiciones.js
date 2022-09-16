import { View, Text, StyleSheet, StatusBar, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataTeams } from '../../src/actions/TeamsActions';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Posiciones = ({ route, navigation }) => {

  
  useEffect(() => {    
    //storeUser()
    console.log(data)
  },[])

  const handleItems = () => {
    
    // const getUser = async () => {
    //   try {
    //     const savedUser = await AsyncStorage.getItem("user");
    //     const currentUser = JSON.parse(savedUser);
    //     console.log(currentUser);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getUser()
  }

  return (
    <View style={styles.container}>
  
      <Button onPress= {() => console.log('entra')} title="Obtener datos"></Button>
   

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        
    },
})

export default Posiciones

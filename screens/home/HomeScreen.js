import { View, Text, Pressable, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('TeamsScreen')}>
        <Text>EQUIPOS</Text>
      </Pressable>    
      <Pressable onPress={() => navigation.navigate('ResultsScreen')}>
        <Text>GRUPOS</Text>
      </Pressable>
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

export default HomeScreen
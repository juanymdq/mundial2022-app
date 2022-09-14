import { View, Text, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'

const LogOutScreen = ({ navigation }) => {
    
    useEffect(() => {   
        Alert.alert("Salir","¿Desea salir de la App?",
            [              
              {
                text: "Si",
                onPress: () => BackHandler.exitApp(),
              },              
              {
                text: "No",
                onPress: () => navigation.navigate('MainScreen')
              },
            ]
        );
    },[])
   
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default LogOutScreen
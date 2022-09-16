import { View, ImageBackground, Alert, Dimensions, BackHandler } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const InicialScreen = ({ navigation }) => {


  const handleIniciar = () => {

    //verifica la dimension de pantalla del telefono y restringe el acceso - 12/09/2022
    Dimensions.get ('window').width < 400
    ? Alert.alert(
        "Error",
        "No es posible ejecutar la App Almacén en este dispositivo",
        [              
          { text: "OK", onPress: () => BackHandler.exitApp() }
        ]
      )
    :    
    setTimeout(() => { 
        navigation.navigate('MainScreen')
    
    }, 1000)             
  }

  return (
    <View style={tw.style("flex-1 h-full")}>
        <ImageBackground source={require('../../assets/images/mainLogo.jpg')} resizeMode="cover" style={tw.style("flex h-full")}>
            {handleIniciar()}
        </ImageBackground>
    </View>
  )
}

export default InicialScreen
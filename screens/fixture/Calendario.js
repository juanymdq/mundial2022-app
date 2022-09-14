import { View, Text, StyleSheet, StatusBar, Pressable, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc'

const Calendario = ({ route, navigation}) => {

    const grupo = route.params.grupo
    const color = route.params.color
    
    const handleSaveResult = () => {

    }

    const handleCalendario = (grupo) => {        
        switch(grupo) {
            case 'A': return (
                <View style={tw.style("flex flex-col h-5/6")}>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>QATAR Vs ECUADOR</Text>
                        <Text style={tw.style("text-lg text-center")}>Domingo 20 de Noviembre - 13:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>SENEGAL Vs PAISES BAJOS</Text>
                        <Text style={tw.style("text-lg text-center")}>Lunes 21 de Noviembre - 13:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>QATAR Vs SENEGAL</Text>
                        <Text style={tw.style("text-lg text-center")}>Viernes 25 de Noviembre - 10:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>PAISES BAJOS Vs ECUADOR</Text>
                        <Text style={tw.style("text-lg text-center")}>Viernes 25 de Noviembre - 13:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>PAISES BAJOS Vs QATAR</Text>
                        <Text style={tw.style("text-lg text-center")}>Martes 29 de Noviembre - 12:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>ECUADOR Vs SENEGAL</Text>
                        <Text style={tw.style("text-lg text-center")}>Martes 29 de Noviembre - 12:00hs.</Text>
                    </View>                   
                </View>
            )
            case 'B': return (
                <View style={tw.style("flex flex-col h-5/6")}>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>INGLATERRA Vs IRAN</Text>
                        <Text style={tw.style("text-lg text-center")}>Lunes 21 de Noviembre - 10:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>ESTADOS UNIDOS Vs GALES</Text>
                        <Text style={tw.style("text-lg text-center")}>Lunes 21 de Noviembre - 16:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>GALES Vs IRAN</Text>
                        <Text style={tw.style("text-lg text-center")}>Viernes 25 de Noviembre - 07:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>INGLATERRA Vs ESTADOS UNIDOS</Text>
                        <Text style={tw.style("text-lg text-center")}>Viernes 25 de Noviembre - 16:00hs.</Text>
                    </View>                   
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>IRAN Vs ESTADOS UNIDOS</Text>
                        <Text style={tw.style("text-lg text-center")}>Martes 29 de Noviembre - 16:00hs.</Text>
                    </View>
                    <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                        <Text style={tw.style("text-xl font-bold text-center")}>GALES Vs INGLATERRA</Text>
                        <Text style={tw.style("text-lg text-center")}>Lunes 29 de Noviembre - 16:00hs.</Text>
                    </View>                   
                </View>
            )
            case 'C': return (
                <ScrollView style={tw.style("")}>
                    <View style={tw.style("flex flex-col h-5/6")}>
                        <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>ARGENTINA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                    <Pressable style={tw.style("ml-17")} onPress = {() => handleSaveResult()}>
                                        <Icon size={40} name="content-save"></Icon>
                                    </Pressable>
                                </View>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>ARABIA SAUDITA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                </View>
                                
                            <Text style={tw.style("text-lg text-center")}>Martes 22 de Noviembre - 07:00hs.</Text>
                        </View>
                        <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>MEXICO</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                    <Pressable style={tw.style("ml-17")} onPress = {() => handleSaveResult()}>
                                        <Icon size={40} name="content-save"></Icon>
                                    </Pressable>
                                </View>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>POLONIA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                </View>
                                
                            <Text style={tw.style("text-lg text-center")}>Martes 22 de Noviembre - 13:00hs.</Text>
                        </View>
                        <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>POLONIA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                    <Pressable style={tw.style("ml-17")} onPress = {() => handleSaveResult()}>
                                        <Icon size={40} name="content-save"></Icon>
                                    </Pressable>
                                </View>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>ARABIA SAUDITA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                </View>
                                
                            <Text style={tw.style("text-lg text-center")}>Sábado 26 de Noviembre - 10:00hs.</Text>
                        </View>
                        <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>ARGENTINA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                    <Pressable style={tw.style("ml-17")} onPress = {() => handleSaveResult()}>
                                        <Icon size={40} name="content-save"></Icon>
                                    </Pressable>
                                </View>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>MEXICO</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                </View>
                                
                            <Text style={tw.style("text-lg text-center")}>Sábado 26 de Noviembre - 16:00hs.</Text>
                        </View>
                        <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>ARABIA SAUDITA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                    <Pressable style={tw.style("ml-17")} onPress = {() => handleSaveResult()}>
                                        <Icon size={40} name="content-save"></Icon>
                                    </Pressable>
                                </View>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>MEXICO</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                </View>
                                
                            <Text style={tw.style("text-lg text-center")}>Miércoles 30 de Noviembre - 16:00hs.</Text>
                        </View>
                        <View style={tw.style("flex flex-col border rounded-md m-1 p-1 mt-5")}>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>POLONIA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                    <Pressable style={tw.style("ml-17")} onPress = {() => handleSaveResult()}>
                                        <Icon size={40} name="content-save"></Icon>
                                    </Pressable>
                                </View>
                                <View style={tw.style("flex flex-row items-center m-1 p-1")}>
                                    <Text style={tw.style("text-xl font-bold w-50 text-left")}>ARGENTINA</Text>
                                    <TextInput style={tw.style("border rounded-md ml-2 text-lg p-2 w-15")}></TextInput>
                                </View>
                                
                            <Text style={tw.style("text-lg text-center")}>Miércoles 30 de Noviembre - 16:00hs.</Text>
                        </View>           
                    </View>
                </ScrollView>
            )
        }
    }

    console.log(grupo)
  return (
    <View style={styles.container}> 
        <View style={tw.style(`flex flex-row justify-left items-center border rounded-md h-20 mt-10 bg-${color}-300 ml-2 mr-2`)}>
            <Pressable 
              onPress={ () => navigation.navigate('MainScreen')}
              style={tw.style("")}
              >  
              <Icon name="arrow-left" size={40} style={tw.style("")}/>
            </Pressable>
            <Text style={tw.style("text-6x1 font-bold ml-25")}>GRUPO {grupo}</Text>
        </View>
        {handleCalendario(grupo)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})

export default Calendario
import { View, Text, StatusBar, Image, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HomeScreen = ({ navigation }) => {

    const handleGroups = (grupo, color) => {
        navigation.navigate('Calendario',{grupo: grupo, color: color})
    }

  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={tw.style(`flex flex-row border h-60 w-full`)}>
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-green-300 m-1')}>
                        <Pressable style={tw.style("")} onPress={() => handleGroups('A','green')}>
                            <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO A</Text>
                        </Pressable>                        
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Qatar.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>QATAR</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Equateur.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ECUADOR</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Senegal.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>SENEGAL</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Pays-Bas.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>PAISES BAJOS</Text>
                    </View>            
                </View>
            
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-red-300 m-1')}>
                        <Pressable style={tw.style("")} onPress={() => handleGroups('B','red')}>
                            <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO B</Text>
                        </Pressable>   
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/England.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>INGLATERRA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Iran.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>IRAN</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Etats-Unis.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ESTADOS UNIDOS</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Gales.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>GALES</Text>
                    </View>            
                </View>
            </View>

            <View style={tw.style(`flex flex-row border h-60 w-full`)}>
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-orange-300 m-1')}>
                    <Pressable style={tw.style("")} onPress={() => handleGroups('C','orange')}>
                            <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO C</Text>
                        </Pressable>   
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Argentine.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ARGENTINA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Arabie_Saoudite.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ARABIA SAUDITA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Mexique.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>MEXICO</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Pologne.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>POLONIA</Text>
                    </View>            
                </View>
            
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-yellow-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO D</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/France.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>FRANCIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Australie.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>AUSTRALIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Danemark.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>DINAMARCA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Tunisie.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>TUNEZ</Text>
                    </View>            
                </View>
            </View>

            <View style={tw.style(`flex flex-row border h-60 w-full`)}>
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-lime-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO E</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Espagne.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ESPAÑA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Costa_Rica.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>COSTA RICA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Allemagne.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ALEMANIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Japon.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>JAPON</Text>
                    </View>            
                </View>
            
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-emerald-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO F</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Belgique.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>BELGICA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Canada.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>CANADA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Maroc.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>MARRUECOS</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Croatie.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>CROACIA</Text>
                    </View>            
                </View>
            </View>

            <View style={tw.style(`flex flex-row border h-60 w-full`)}>
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-cyan-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO G</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Bresil.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>BRASIL</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Serbie.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>SERBIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Suisse.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>SUIZA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Cameroun.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>CAMERUN</Text>
                    </View>            
                </View>
            
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-purple-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO H</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Portugal.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>PORTUGAL</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Ghana.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>GHANA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Uruguay.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>URUGUAY</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/Coree_du_Sud.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>COREA DEL SUR</Text>
                    </View>            
                </View>
            </View>
        </ScrollView>
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
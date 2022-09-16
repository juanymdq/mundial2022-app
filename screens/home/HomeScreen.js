import { View, Text, StatusBar, Image, StyleSheet, Pressable, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '../../src/actions/TeamsActions'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {

    const { equipos, isSuccess, isError } = useSelector(state => state.teams)
    const dispatch = useDispatch()

    useEffect(() => {        
        dispatch(getTeams())        
    },[])
      
    const handleGroups = (grupo, color) => {
        console.log('grupo: '+grupo+' - color: '+color)
        navigation.navigate('Calendario',{grupo: grupo, color: color})
        //navigation.navigate('Posiciones',{grupo: grupo, color: color})
    }
    
    const letraGrupo = [
        {"letra":"A","color":"green"},
        {"letra":"B","color":"red"},
        {"letra":"C","color":"orange"},
        {"letra":"D","color":"yellow"},
        {"letra":"E","color":"lime"},
        {"letra":"F","color":"emerald"},
        {"letra":"G","color":"cyan"},
        {"letra":"H","color":"purple"}
    ]
    const getRutaImagen = (id) => {
        switch(id){
            case 1: 
                return require("../../assets/images/banderas/alemania.png");
                break;
            case 2: 
                return require("../../assets/images/banderas/arabia_saudita.png");
                break;
            case 3: 
                return require("../../assets/images/banderas/argentina.png");
                break;
            case 4: 
                return require("../../assets/images/banderas/australia.png");
                break;
            case 5: 
                return require("../../assets/images/banderas/belgica.png");
                break;
            case 6: 
                return require("../../assets/images/banderas/brasil.png");
                break;
            case 7: 
                return require("../../assets/images/banderas/canada.png");
                break;
            case 8: 
                return require("../../assets/images/banderas/camerun.png");
                break;
            case 9: 
                return require("../../assets/images/banderas/corea_del_sur.png");
                break;
            case 10: 
                return require("../../assets/images/banderas/costa_rica.png");
                break;
            case 11: 
                return require("../../assets/images/banderas/croacia.png");
                break;
            case 12: 
                return require("../../assets/images/banderas/dinamarca.png");
                break;
            case 13: 
                return require("../../assets/images/banderas/ecuador.png");
                break;
            case 14: 
                return require("../../assets/images/banderas/eeuu.png");
                break;
            case 15: 
                return require("../../assets/images/banderas/españa.png");
                break;
            case 16: 
                return require("../../assets/images/banderas/francia.png");
                break;
            case 17: 
                return require("../../assets/images/banderas/gales.png");
                break;
            case 18: 
                return require("../../assets/images/banderas/ghana.png");
                break;
            case 19: 
                return require("../../assets/images/banderas/inglaterra.png");
                break;
            case 20: 
                return require("../../assets/images/banderas/iran.png");
                break;
            case 21: 
                return require("../../assets/images/banderas/japon.png");
                break;
            case 22: 
                return require("../../assets/images/banderas/marruecos.png");
                break;
            case 23: 
                return require("../../assets/images/banderas/mexico.png");
                break;
            case 24: 
                return require("../../assets/images/banderas/paises_bajos.png");
                break;
            case 25: 
                return require("../../assets/images/banderas/polonia.png");
                break;
            case 26: 
                return require("../../assets/images/banderas/portugal.png");
                break;
            case 27: 
                return require("../../assets/images/banderas/qatar.png");
                break;
            case 28: 
                return require("../../assets/images/banderas/senegal.png");
                break;
            case 29: 
                return require("../../assets/images/banderas/serbia.png");
                break;
            case 30: 
                return require("../../assets/images/banderas/suiza.png");
                break;
            case 31: 
                return require("../../assets/images/banderas/tunez.png");
                break;
            case 32: 
                return require("../../assets/images/banderas/uruguay.png");
                break;
        }
    }
    return (
        <View style={styles.container}>  
            <ScrollView>
            { 
                letraGrupo.map(el => {
                const grupo = equipos.filter((item) => item.grupo == el.letra)            
                {
                    return( 
                        <View key={el.letra} style={tw.style('flex flex-col justify-center h-57 w-80 ml-10 mr-5 mt-5')}>
                            <View style={tw.style(`border rounded-md h-10 bg-${el.color}-300 m-1`)}>
                                <Pressable style={tw.style("")} onPress={() => handleGroups(el.letra,el.color)}>
                                    <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO {el.letra}</Text>
                                </Pressable>                        
                            </View>
                            {
                            grupo.map(obj => {                                 
                                let ruta = getRutaImagen(obj.id)                                
                                return(
                                    <View key={obj.id} style={tw.style('flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md')}>
                                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={ruta}/>
                                        <Text style={tw.style(`font-bold text-md`)}>{obj.name}</Text>
                                    </View>
                                )
                            })
                            }
                        </View>
                    )
                }
                })   
             }
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

   {/* <ScrollView style={styles.scrollView}>
            <View style={tw.style(`flex flex-row border h-60 w-full`)}>
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-green-300 m-1')}>
                        <Pressable style={tw.style("")} onPress={() => handleGroups('A','green')}>
                            <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO A</Text>
                        </Pressable>                        
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/qatar.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>QATAR</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/ecuador.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ECUADOR</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/senegal.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>SENEGAL</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/paises_bajos.png')}/>
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
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/inglaterra.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>INGLATERRA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/iran.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>IRAN</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/eeuu.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ESTADOS UNIDOS</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/gales.png')}/>
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
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/argentina.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ARGENTINA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/arabia_saudita.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ARABIA SAUDITA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/mexico.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>MEXICO</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/polonia.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>POLONIA</Text>
                    </View>            
                </View>
            
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-yellow-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO D</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/francia.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>FRANCIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/australia.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>AUSTRALIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/dinamarca.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>DINAMARCA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/tunez.png')}/>
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
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/españa.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ESPAÑA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/costa_rica.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>COSTA RICA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/alemania.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>ALEMANIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/japon.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>JAPON</Text>
                    </View>            
                </View>
            
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-emerald-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO F</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/belgica.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>BELGICA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/canada.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>CANADA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/marruecos.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>MARRUECOS</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/croacia.png')}/>
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
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/brasil.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>BRASIL</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/serbia.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>SERBIA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/suiza.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>SUIZA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/camerun.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>CAMERUN</Text>
                    </View>            
                </View>
            
                <View style={tw.style(`flex flex-col border h-57 w-49 m-1`)}>
                    <View style={tw.style('border rounded-md h-10 bg-purple-300 m-1')}>
                        <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO H</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/portugal.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>PORTUGAL</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/ghana.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>GHANA</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/uruguay.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>URUGUAY</Text>
                    </View>
                    <View style={tw.style(`flex flex-row items-center bg-slate-300 m-1 p-1 border rounded-md`)}>
                        <Image style={tw.style("w-8 h-6 ml-1 mr-2")} source={require('../../assets/images/banderas/corea_del_sur.png')}/>
                        <Text style={tw.style(`font-bold text-md`)}>COREA DEL SUR</Text>
                    </View>            
                </View>
            </View>
        </ScrollView> */}
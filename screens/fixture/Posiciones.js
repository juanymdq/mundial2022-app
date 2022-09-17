import { View, Text, StatusBar, Image, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '../../src/actions/TeamsActions'
import { ScrollView } from 'react-native-gesture-handler'

const PosicionesScreen = ({ navigation }) => {

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

            case 2: 
                return require("../../assets/images/banderas/arabia_saudita.png");                

            case 3: 
                return require("../../assets/images/banderas/argentina.png");                

            case 4: 
                return require("../../assets/images/banderas/australia.png");                

            case 5: 
                return require("../../assets/images/banderas/belgica.png");
                
            case 6: 
                return require("../../assets/images/banderas/brasil.png");
                
            case 7: 
                return require("../../assets/images/banderas/canada.png");
                
            case 8: 
                return require("../../assets/images/banderas/camerun.png");
                
            case 9: 
                return require("../../assets/images/banderas/corea_del_sur.png");
                
            case 10: 
                return require("../../assets/images/banderas/costa_rica.png");
                
            case 11: 
                return require("../../assets/images/banderas/croacia.png");
                
            case 12: 
                return require("../../assets/images/banderas/dinamarca.png");
                
            case 13: 
                return require("../../assets/images/banderas/ecuador.png");
                
            case 14: 
                return require("../../assets/images/banderas/eeuu.png");
                
            case 15: 
                return require("../../assets/images/banderas/españa.png");
                
            case 16: 
                return require("../../assets/images/banderas/francia.png");
                
            case 17: 
                return require("../../assets/images/banderas/gales.png");
                
            case 18: 
                return require("../../assets/images/banderas/ghana.png");
                
            case 19: 
                return require("../../assets/images/banderas/inglaterra.png");
                
            case 20: 
                return require("../../assets/images/banderas/iran.png");
                
            case 21: 
                return require("../../assets/images/banderas/japon.png");
                
            case 22: 
                return require("../../assets/images/banderas/marruecos.png");
                
            case 23: 
                return require("../../assets/images/banderas/mexico.png");
                
            case 24: 
                return require("../../assets/images/banderas/paises_bajos.png");
                
            case 25: 
                return require("../../assets/images/banderas/polonia.png");
                
            case 26: 
                return require("../../assets/images/banderas/portugal.png");
                
            case 27: 
                return require("../../assets/images/banderas/qatar.png");
                
            case 28: 
                return require("../../assets/images/banderas/senegal.png");
                
            case 29: 
                return require("../../assets/images/banderas/serbia.png");
                
            case 30: 
                return require("../../assets/images/banderas/suiza.png");
                
            case 31: 
                return require("../../assets/images/banderas/tunez.png");
                
            case 32: 
                return require("../../assets/images/banderas/uruguay.png");
                
        }
    }

    return (
        <View style={styles.container}>  
            <Pressable 
              onPress={ () => navigation.navigate('HomeScreen')}
              style={tw.style("")}
              >  
              <Icon name="arrow-left" size={40} style={tw.style("")}/>
            </Pressable>
            <ScrollView>
            { 
                letraGrupo.map(el => {             
                const grupo = equipos.filter((item) => item.grupo == el.letra)            
                {
                    return( 
                        <View key={el.letra} style={tw.style('flex flex-col justify-center h-57 w-full mt-5')}>
                            <View style={tw.style(`border rounded-md h-10 bg-${el.color}-300 m-1`)}>
                                <Pressable style={tw.style("")} onPress={() => handleGroups(el.letra,el.color)}>
                                    <Text style={tw.style(`h-7 mt-1 text-lg font-bold text-center`)}>GRUPO {el.letra}</Text>
                                </Pressable>                        
                            </View>
                            <View style={tw.style("flex flex-col")}>
                                <View style={tw.style("flex flex-row justify-end mr-2 ml-2 p-1 border rounded-md ")}>
                                    <Text style={tw.style("w-40 text-center")}></Text>
                                    <Text style={tw.style("w-10 text-center")}>Pts.</Text>
                                    <Text style={tw.style("w-10 text-center")}>G</Text>
                                    <Text style={tw.style("w-10 text-center")}>E</Text>
                                    <Text style={tw.style("w-10 text-center")}>P</Text>
                                    <Text style={tw.style("w-10 text-center")}>Dif.</Text>
                                </View>
                                {                            
                                grupo.map(obj => {                                 
                                    let ruta = getRutaImagen(obj.id)                                    
                                    return(
                                        <View key={obj.id} style={tw.style('flex flex-row justify-start items-center ml-2 mr-2 p-1 border-b-2')}>
                                            <View style={tw.style("flex flex-row w-43")}>
                                                <Image style={tw.style("w-5 h-3 ml-1 mr-2")} source={ruta}/>
                                                <Text style={tw.style(`font-bold text-3x1`)}>{obj.name}</Text>
                                            </View>
                                            <View style={tw.style("flex flex-row ")}>
                                                {/* //TODO - aca vienen los resultados de partidos */}
                                                <Text style={tw.style("w-10 text-center")}>1</Text>
                                                <Text style={tw.style("w-10 text-center")}>2</Text>
                                                <Text style={tw.style("w-10 text-center")}>3</Text>
                                                <Text style={tw.style("w-10 text-center")}>4</Text>
                                                <Text style={tw.style("w-10 text-center")}>5</Text>
                                            </View>
                                        </View>                                        
                                    )
                                })                                
                                }
                            
                            </View>
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

export default PosicionesScreen
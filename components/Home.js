import * as React from 'react';
import {
  Text,
  View,
  Flatlist,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { estilo } from './Estilo';
import {useFonts,Quicksand_400Regular} from '@expo-google-fonts/dev';
export default function Home(props) {
    let [fontsLoaded] = useFonts({
    Quicksand_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;}
    else{
  return (
    <View>
      <Text style={estilo.titulo}>React Fashion</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Blusas');
        }}>
        <Text style={estilo.botao}>Blusas</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate('Calças');
        }}>
        <Text style={estilo.botao}>Calças </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate('Camisetas');
        }}>
        <Text style={estilo.botao}>Camisetas</Text>
      </TouchableOpacity>
      <Text style={estilo.rodape}>React Fashion - 2023</Text>
    </View>
  );}
}

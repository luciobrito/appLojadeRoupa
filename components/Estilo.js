import * as React from 'react';
import {
  Text,
  View,
  Flatlist,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/dev';
import AppLoading from 'expo-app-loading';
export default function Estilo() {
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });
}
export const estilo = StyleSheet.create({
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
    fontFamily: 'Quicksand_400Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  botao: {
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    backgroundColor: '#f06c6c',
    borderRadius: 5,
    textAlign: 'center',
    fontFamily: 'Quicksand_400Regular',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#FFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 5,
    margin: 15,
    alignSelf: 'center',
    resizeMode: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderColor: '#FFFFF',
    borderWidth: 0.1
  },
  tituloProduto: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: 'bold',
    fontFamily: 'Quicksand_400Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  precoProduto: {
    fontSize: 15,
    marginLeft: 30,
  },
  codigoProduto: {
    fontSize: 10,
    marginRight: 30,
    textAlign: 'right',
  },
  rodape: {
    marginTop: 15,
    fontSize: 10,
    textAlign: 'center',
  },
});

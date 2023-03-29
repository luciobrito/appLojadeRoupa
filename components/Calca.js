import * as React from 'react';
import {Text,View,FlatList,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { estilo } from './Estilo';
import {arrayCalcas} from './Inventario';
export default function Calca(){
  return(
    <View>
    <ScrollView>
 <Text style={estilo.titulo}>Acabaram de chegar! </Text>
      <FlatList
        data={arrayCalcas}
        renderItem={({ item }) => (
          <View>
          
            <Image source={item.imagem} style={estilo.imagem} />
            <Text style={estilo.tituloProduto}>{item.nome}</Text>
            <Text style={estilo.codigoProduto}>
              Códgio: {item.codigo}
           
            </Text>
            <Text style={estilo.precoProduto}>{item.preco}</Text>
            
          </View>
        )}
      />
      <Text style={estilo.rodape}>React Fashion - 2023</Text>
    </ScrollView>
    </View>
  );
}
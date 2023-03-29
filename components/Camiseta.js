import * as React from 'react';
import {Text,View,Flatlist,Image,StyleSheet,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { estilo } from './Estilo';
import {arrayCamisetas} from './Inventario';
export default function Camisetas(){
  return(
    <ScrollView>
       <Text style={estilo.titulo}>As melhores opções em Camisetas</Text>
      <FlatList
        data={arrayCamisetas}
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
  );
}
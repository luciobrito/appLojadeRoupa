import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { estilo } from './Estilo';
import { arrayBlusas } from './Inventario';
export default function Blusa() {
  return (
    <ScrollView>
      <Text style={estilo.titulo}>Coleção Melhores da React Fashion</Text>
      <FlatList
        data={arrayBlusas}
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

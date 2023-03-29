import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Blusa from './Blusa.js';
import Home from './Home';
import Camisetas from './Camiseta';
import Calca from './Calca';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Home}/>
        <Stack.Screen name="Blusas" component={Blusa}/>
        <Stack.Screen name="Calças" component={Calca}/>
        <Stack.Screen name="Camisetas" component={Camisetas}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
}
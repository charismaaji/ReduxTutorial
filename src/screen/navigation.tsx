import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './screen-1';
import Screen2 from './screen2';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};
export default NavigationStack;

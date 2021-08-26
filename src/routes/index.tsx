import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {Home} from '../pages/Home'
import {Status} from '../pages/Status'
const Stack = createStackNavigator();


export const Routes:  React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Status} />
    </Stack.Navigator>
  );
}


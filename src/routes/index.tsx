import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages/Home';
import Status from '../pages/Status';
import {NavigationContainer} from '@react-navigation/native';


const Stack = createNativeStackNavigator();



const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              headerShown: false,
          }
          }
        />
        <Stack.Screen
          name="Status"
          component={Status} 
          options={
            {
              title: 'Voltar'
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

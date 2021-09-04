import React from 'react'
import { Home } from '../screens/Home'
import { Status } from '../screens/Status'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home'
            } else if (route.name === 'Status') {
              iconName = focused ? 'list' : 'list'
            }

            return <Feather name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Status" component={Status} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes

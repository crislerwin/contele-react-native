import React from 'react'
import { Home } from '../pages/Home'
import { Status } from '../pages/Status'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'react-native'
const Tab = createBottomTabNavigator()
const routeTitle = ({ route }: any) => {
  if (route.name === 'Home') {
    return 'Home'
  } else if (route.name === 'Status') {
    return 'Status'
  }
}
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000062" />

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

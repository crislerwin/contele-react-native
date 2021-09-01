import React from 'react'
import { TouchButton,  Text } from './styles'
import { useNavigation } from '@react-navigation/native'




export const Button = ({children, route}:{children: string, route: string}) => {
  const { navigate }: any = useNavigation()
  return <TouchButton onPress={() => navigate(route)}><Text>{children}</Text></TouchButton>
}

import * as React from 'react'
import { Container, Text, Header } from './styles'
import { useNavigation } from '@react-navigation/native'
import {useFetch} from '../../hooks/useFetch'
export const Home = () => {
  const { navigate }: any = useNavigation()
 const {data} = useFetch("/confirmed")
 if (!data) {
   return <Text>Loading...</Text>
 }

  return (
    
    <Container>
      <Header>
        <Text> Seja bem vindo!</Text>

        <Text onPress={() => navigate("Status")}>Status</Text>
      </Header>
    
        <Text>{data[0].countryRegion}</Text>
      
    </Container>
 
  )
}

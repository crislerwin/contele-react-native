import * as React from 'react'
import { Container, Text, Header } from './styles'

import {useFetch} from '../../hooks/useFetch'
import {Button} from '../../components/button'
export const Home = () => {
  
 const {data} = useFetch("/confirmed")
 if (!data) {
   return <Text>Loading...</Text>
 }

  return (
    
    <Container>
      <Header>
        <Text> Seja bem vindo!</Text>

        <Button route="Status">Status</Button>
      </Header>
    
        <Text>{data[0].countryRegion}</Text>
      
    </Container>
 
  )
}

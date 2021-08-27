import * as React from 'react'
import { Container, Text, Header } from './styles'
import { useNavigation } from '@react-navigation/native'

export const Home: React.FC<{}> = () => {
  const { navigate } = useNavigation()
  return (
    <Container>
      <Header>
        <Text> Seja bem vindo!</Text>

        <Text onPress={() => navigate('Status')}>Status</Text>
      </Header>
    </Container>
  )
}

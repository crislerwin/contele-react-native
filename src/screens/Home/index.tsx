import * as React from 'react'
import { Container, FlatContainer, TimeContainer, TimeTitle } from './styles'
import icon from '../../assets/bussola.png'
import { Head } from '../../components/Header'
import { Tracking } from '../../components/Tracking'
import { Menu } from '../../components/Menu'
import { FlatList } from 'react-native-gesture-handler'
import { Item } from '../../components/Item'
import { time } from '../../utils/data'
import { useFetch } from '../../hooks/useFetch'
import {Text} from 'react-native'
 export const Home: React.FC<{}> = () => {
  const {data, error} = useFetch('/confirmed')
  if (error) return <Text>failed to load</Text>
  if (!data) return <Text>loading...</Text>
  
  return (
    <Container>
      <Head title="Olá, bem-vindo 👋" />
      <Tracking title="My GPS - Tracking" status="Online" image={icon} />
      <Menu title="Status do Serviço" description="Serviço ativo" />
      <FlatContainer>
        <TimeContainer>
          <TimeTitle>Intervalo de comunicação</TimeTitle>
        </TimeContainer>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.iso2} />}
          keyExtractor={(item) => item.uid}
          numColumns={4}
        />
      </FlatContainer>
    </Container>
  )
}

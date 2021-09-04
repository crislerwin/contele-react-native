import * as React from 'react'
import { Container, FlatContainer, TimeContainer, TimeTitle } from './styles'
import icon from '../../assets/bussola.png'
import { Head } from '../../components/Header'
import { Tracking } from '../../components/Tracking'
import { Menu } from '../../components/Menu'
import { FlatList } from 'react-native-gesture-handler'
import { Item } from '../../components/Item'
import { time } from '../../utils/data'

export const Home: React.FC<{}> = () => {
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
          data={time}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          numColumns={4}
        />
      </FlatContainer>
    </Container>
  )
}

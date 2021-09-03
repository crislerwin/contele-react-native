import * as React from 'react'
import { Container, FlatContainer, TimeContainer, TimeTitle } from './styles'
import icon from '../../assets/bussola.png'
import { Head } from '../../components/Header'
import { Tracking } from '../../components/Tracking'
import { Menu } from '../../components/Menu'
import { FlatList } from 'react-native'
import { Item } from '../../components/Item'
import { time } from '../../utils/data'

export const Home = () => {
  const renderItem = ({ item }: any) => <Item title={item.title} />

  return (
    <Container>
      <Head title="Olá, bem-vindo 👋" />
      <Tracking title="My GPS - Tracking" status="Online" image={icon} />
      <Menu title="Status do Serviço" description="Serviço ativo" />
      <FlatContainer>
        <TimeContainer>
          <TimeTitle>Intervalo de comunicação</TimeTitle>
        </TimeContainer>
        <FlatList<{ id: number; title: string }>
          data={time}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={4}
        />
      </FlatContainer>
    </Container>
  )
}

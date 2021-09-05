import * as React from 'react'
import { Container, FlatContainer, TimeContainer, TimeTitle } from './styles'
import icon from '../../assets/bussola.png'
import { Head } from '../../components/Header'
import { Tracking } from '../../components/Tracking'
import { Menu } from '../../components/Menu'
import { FlatList } from 'react-native-gesture-handler'
import { Item } from '../../components/Item'
import { time } from '../../utils/data'
// import { useFetch } from '../../hooks/useFetch'
// import { Loader } from '../../components/Loader'

export const Home: React.FC = () => {
  // const { data } = useFetch('/confirmed')
  // if (!data) return <Loader />

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item title={item.title} />}
          numColumns={4}
        />
      </FlatContainer>
    </Container>
  )
}

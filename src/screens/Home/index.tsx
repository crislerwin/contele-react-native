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
  const [isActive, setIsActive] = React.useState(false)
  // const { data } = useFetch('/confirmed')
  // if (!data) return <Loader />

  return (
    <Container>
      <Head title="Olá, bem-vindo 👋" />
      <Tracking
        statusColor={isActive === true ? 'green' : 'red'}
        title="My GPS - Tracking"
        status={isActive === true ? 'Online' : 'Offline'}
        image={icon}
      />
      <Menu
        active={isActive}
        onToggle={() => setIsActive(isActive === true ? false : true)}
        title="Status do Serviço"
        description={isActive === true ? 'Serviço Ativo' : 'Serviço Inativo'}
      />
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

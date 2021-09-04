import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Loader } from '../../components/Loader'
import { StatsList } from '../../components/StatsList'
import { useFetch } from '../../hooks/useFetch'
import { stats } from '../../utils/data'
import { Container, Header, Title, ListContainer } from './styles'

export const Status: React.FC<{}> = () => {
  const { data } = useFetch('/confirmed')
  if (!data) return <Loader />

  return (
    <Container>
      <Header>
        <Title>Status</Title>
      </Header>
      <ListContainer>
        <FlatList
          data={stats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StatsList
              time={item.time}
              title={item.title}
              status={item.status}
              pkg={item.pkg}
            />
          )}
        />
      </ListContainer>
    </Container>
  )
}

import * as React from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { StatsList } from '../../components/StatsList'
import { useFetch } from '../../hooks/useFetch'
import { stats } from '../../utils/data'
import { Container, Header, Title, ListContainer } from './styles'

export const Status: React.FC<{}> = () => {
  const {data, error} = useFetch("/confirmed")
  if (!data) return <Text>Loading...</Text>
  if (error) return <Text>Service unavailable</Text>
  return (
    <Container>
      <Header>
        <Title>Status</Title>
      </Header>
      <ListContainer>
        <FlatList
          data={data}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => (
            <StatsList
              time={item.deaths}
              title={item.countryRegion}
              status={item.confirmed}
              pkg={item.iso3}
            />
          )}
        />
      </ListContainer>
    </Container>
  )
}

import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFetch } from '../../hooks/useFetch'

const Status: React.FC<{}> = () => {
  const {data} = useFetch('/confirmed')
  if (!data) {
    return <Text>Loading...</Text>
  }


  return (
 <Text>{data[0].deaths}</Text>
  )
}
export default Status


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
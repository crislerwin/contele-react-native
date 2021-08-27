import * as React from 'react'
import { View, Text } from 'react-native'
//  import {useFetch} from '../../hooks/useFetch'
const Status: React.FC<{}> = () => {
  //  const {data, mutate} = useFetch('/points/');

  const data = {
    "points": [
      {
        "id": "12d1220dl2",
        "latitude": -23.2213123,
        "longitude": -45.2313213,
        "speed": 120,
        "time": "2020-01-01"
      }
    ]
  }
  return <View>

<Text>{data.points[0].id}</Text>
  </View>
}
export default Status

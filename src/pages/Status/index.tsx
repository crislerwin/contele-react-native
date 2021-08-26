import * as React from 'react';
import {View, Button} from 'react-native';

const Status: React.FC<{}> = ({navigation}) => {
  return (
    <View>
      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default Status;

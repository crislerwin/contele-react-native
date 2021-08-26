import * as React from 'react';
import {Container, Text, Header, Footer} from './styles';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export const Home: React.FC<{}> = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Header>
        <Text>Olá seja bem vindo</Text>
        <Button title="Status" onPress={() => navigate('Status')} />
      </Header>
      <Footer />
    </Container>
  );
};

import React from 'react';
import { Container, Text, Header, Footer } from './styles';
export const Home: React.FC<{}> = () => {
  return (
    <Container>
     <Header
     >
        <Text>Olá seja bem vindo</Text>
        <Text>Status</Text>
     </Header>
     <Footer />
      </Container>
  );
};
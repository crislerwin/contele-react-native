import * as React from 'react'
import { Container } from './styles'
import icon from '../../assets/bussola.png'
import { Head } from '../../components/Header'
import { Tracking } from '../../components/Tracking'
export const Home = () => {
 
  return (
    <Container>
   <Head title="Olá, bem-vindo " name="Crisler"/>
   <Tracking title="My GPS - Tracking" status="Online" image={icon} />
    </Container>
  )
}

import React from 'react'
import {
  Container,
  ClockContainer,
  IdText,
  StatusTitle,
  HourTitle,
  StatusContainer,
} from './styles'

type StatsProps = {
  pkg: string
  status: string
  time: string
  title: string
}

export const StatsList: React.FC<StatsProps> = ({
  status,
  time,
  pkg,
  title,
}) => {
  return (
    <Container>
      <StatusContainer>
        <IdText>
          {title} : {pkg}
        </IdText>
        <StatusTitle>{status}</StatusTitle>
      </StatusContainer>
      <ClockContainer>
        <HourTitle>{time}</HourTitle>
      </ClockContainer>
    </Container>
  )
}

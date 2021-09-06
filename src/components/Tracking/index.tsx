import React from 'react'
import {
  Container,
  IconContainer,
  Icon,
  TrackContainer,
  TrackTitle,
  TrackStatus,
} from './styles'

type TrackProps = {
  title: string
  status: string
  image: string,
  statusColor: string
}

export const Tracking: React.FC<TrackProps> = ({ title, status, image, statusColor }) => {
  return (
    <Container>
        <IconContainer>
        <Icon source={image} />
      </IconContainer>
      <TrackContainer>
        <TrackTitle>{title}</TrackTitle>
        <TrackStatus color={statusColor}>{status}</TrackStatus>
      </TrackContainer>
    
    </Container>
  )
}

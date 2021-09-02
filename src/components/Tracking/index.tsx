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
  image: string
}

export const Tracking: React.FC<TrackProps> = ({ title, status, image }) => {
  return (
    <Container>
        <IconContainer>
        <Icon source={image} />
      </IconContainer>
      <TrackContainer>
        <TrackTitle>{title}</TrackTitle>
        <TrackStatus>{status}</TrackStatus>
      </TrackContainer>
    
    </Container>
  )
}

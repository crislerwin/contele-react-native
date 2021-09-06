import React from 'react'
import {
  Container,
  TextContainer,
  Title,
  ButtonContainer,
  Status,
} from './styles'
import ToggleSwitch from 'toggle-switch-react-native'

type MenuProps = {
  title: string
  description: string
  active: boolean
  onToggle: () => void
}

export const Menu: React.FC<MenuProps> = ({
  title,
  description,
  onToggle,
  active,
}) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Status>{description}</Status>
      </TextContainer>
      <ButtonContainer>
        <ToggleSwitch
          isOn={active}
          onColor="green"
          offColor="red"
          labelStyle={{ color: 'black', fontWeight: '900' }}
          size="medium"
          onToggle={onToggle}
        />
      </ButtonContainer>
    </Container>
  )
}

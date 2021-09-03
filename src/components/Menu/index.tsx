import React from 'react';
import { Container, TextContainer, Title, ButtonContainer, Status} from './styles';
import ToggleSwitch from 'toggle-switch-react-native'

type MenuProps = {
  title: string;
  description: string;
}

export const Menu: React.FC<MenuProps> = ({ title, description }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Status>{isActive === true ? 'Serviço Ativo' : 'Serviço Inativo'}</Status>
      </TextContainer>
      <ButtonContainer>
      <ToggleSwitch
  isOn={isActive}
  onColor="green"
  offColor="red"

  labelStyle={{ color: "black", fontWeight: "900" }}
  size="medium"
  onToggle={() =>  setIsActive(isActive === true ? false : true) }
/>
      </ButtonContainer>
    </Container>
  );
}


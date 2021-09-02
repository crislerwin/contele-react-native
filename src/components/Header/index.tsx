import React from 'react';
import {HeaderContainer, Header, HeaderText,Name} from './styles'

type TitleProps = {
  title: string;
  name: string;
}

export const Head: React.FC<TitleProps> = ({title, name}) => {
  return (
    <HeaderContainer>
      <Header>
        <HeaderText>{title}<Name>{name}</Name></HeaderText>
      </Header>
    </HeaderContainer>
  );
}

import React from 'react';
import {HeaderContainer, Header, HeaderText,Name} from './styles'

type TitleProps = {
  title: string;
 
}

export const Head: React.FC<TitleProps> = ({title}) => {
  return (
    <HeaderContainer>
      <Header>
        <HeaderText>{title}</HeaderText>
      </Header>
    </HeaderContainer>
  );
}

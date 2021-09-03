import React from 'react'
import { ItemContainer, ItemTouchable, Title } from './styles'

type ItemProps = {
  title: string 
}

export const Item: React.FC<ItemProps> = ({ title }) => {
  return (
    <ItemTouchable>
      <ItemContainer>
        <Title>{title}</Title>
      </ItemContainer>
    </ItemTouchable>
  )
}
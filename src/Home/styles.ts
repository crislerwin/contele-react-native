import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}) => theme.color.primary};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.color.text};
  font-size: 16px;
  font-weight: normal;
font-family: Roboto;
  `;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  background-color: ${({theme}) => theme.color.background};
`;
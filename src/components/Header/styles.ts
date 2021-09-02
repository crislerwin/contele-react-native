import styled from 'styled-components/native';

const HeaderContainer = styled.View``;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  background-color: ${({theme}) => theme.color.secondary};`
  ;
const Name = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.color.green};
  font-weight: bold;  
`;

const HeaderText = styled.Text`
color: ${({theme}) => theme.color.text};
  font-size: 20px;
  font-weight: normal;`;


export { HeaderContainer, Header, HeaderText, Name };
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.secondary};
`

const Title = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 20px;
  font-weight: normal;
`
const ListContainer = styled.View`
background-color: ${({ theme }) => theme.color.background};
`

export { Container, Header, Title, ListContainer }

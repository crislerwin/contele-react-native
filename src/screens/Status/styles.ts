import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
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
export { Container, Header, Title }

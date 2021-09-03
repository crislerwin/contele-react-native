import styled from 'styled-components/native'

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const TextContainer = styled.View`
  margin: 20px 20px;
`

const Title = styled.Text`
  font-size: 20px;
`

const Status = styled.Text`
  font-size: 16px;
  margin: 4px;
  color: ${({ theme }) => theme.color.primary};
`

const ButtonContainer = styled.View`
  margin: 30px;
`

export { Container, TextContainer, Title, ButtonContainer, Status }

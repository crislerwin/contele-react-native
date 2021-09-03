import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
`

const FlatContainer = styled.SafeAreaView`
  margin: 10px;
`

const TimeContainer = styled.View`
  margin: 10px;
`

const TimeTitle = styled.Text`
  font-size: 20px;
  font-weight: 400;
`

export { Container, FlatContainer, TimeContainer, TimeTitle }

import styled from 'styled-components/native'

const Container = styled.View`
  flex-direction: row;
  
`

const IconContainer = styled.View`
  margin: 10px 20px;
  padding: 10px;
`
const Icon = styled.Image`
  width: 70px;
  height: 70px; ;
`

const TrackContainer = styled.View`
  margin: 20px 10px;
  padding: 10px;
`

const TrackTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary};
`

const TrackStatus = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.green};
`

export {
  Container,
  IconContainer,
  Icon,
  TrackContainer,
  TrackTitle,
  TrackStatus,
}

import styled from 'styled-components/native'

const Container = styled.View`
 justify-content: space-between;
 flex-direction: row;
 border: 1px solid #e6e6f0;
`

const ClockContainer = styled.View`
margin: 40px
`

const StatusContainer = styled.View`
margin: 30px;
text-align: center;
font-weight: 400;
`

const IdText = styled.Text`
font-size: 18px;

`

const StatusTitle = styled.Text`
font-size: 14px;
margin-top: 4px;
`

const HourTitle = styled.Text`
font-size: 14px;
color: #6C6B79;
font-weight: 600;
`

export { Container, ClockContainer, IdText, StatusTitle, HourTitle, StatusContainer }

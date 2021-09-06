import styled from "styled-components/native";
import {Animated} from 'react-native'
const  Container  = styled.View`
flex: 1;
width: 80px;
height: 40px;
margin: 144px;
flex-direction: row;
align-items: center;
justify-content: center;
justify-content: space-between;
`;

const Ball = styled(Animated.View)`
width: 14px;
height: 14px;
border-radius: 7px;
background-color: ${({ color } : {color: string}) => color || '#777'};
`;

const Text = styled.Text`
font-size: 20px;
color: #F4f5f3;
`;
export { Container, Ball, Text };
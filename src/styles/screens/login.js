import styled from 'styled-components';

export const Error = styled.Text`
  color: red;
  margin-left: 15px;
  margin-top: 5px;
`;


export const ContainerLoading=styled.View `
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const TopBar = styled.View`
  flex-direction: row;
  background-color: #fafafa;
  height: 50px;
  border-bottom-color: gainsboro;
  border-bottom-width: 0.75px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const ButtonLoginBox = styled.TouchableOpacity`
  margin-left: 15px;
  margin-right: 15px;
  height: 44px;
  border-radius: 5px;
  background-color: #9bcbf7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLogin = styled.Text`
  font-weight: 700;
  color: white;
  font-size: 14px;
`;


export const SingUpBox=styled.View `
  flex-direction:row;
  display:flex;
  justify-content:center;
  margin-top:30px;
`


export const TextSingUp= styled.Text `
  color:#3797EF;
`

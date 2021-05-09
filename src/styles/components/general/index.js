import styled from "styled-components";

export const ButtonIcon =styled.TouchableOpacity `
    width:40px;
    height: 40px;
    border-radius:40px;
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


export const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  margin-left: 10px;
  max-width:300px;
`;

export const ContainerLoading=styled.View `
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
  
`
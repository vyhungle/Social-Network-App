import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  
  background-color: #FFFFFF;
`;

export const ContainerLoading=styled.View `
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const BoxTitle = styled.View`
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-bottom:20px;
`;
export const TextTitle = styled.Text`
  font-size: 35px;
  font-weight: 700;
`;

export const ContentBox = styled.Text`
  flex: 1;
`;

export const TextInputField = styled.TextInput`
  height: 44px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  border-color: #20232a;
  color: #20232a;
  background-color: #fafafa;
  border-width: 0.5px;
  padding-left: 10px;
  width: 370px;
`;

export const BoxButtonSubmit = styled.View`
  display: flex;
  align-items: center;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 100px;
  height: 44px;
  margin-top: 30px;
  background-color: #3797ef;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-weight: 700;
  color: white;
  font-size: 14px;
`;


export const Error = styled.Text`
  color: red;
  margin-left: 15px;
  margin-top: 5px;
`;

import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import { colorTextPrimary } from '../../../color';
const win = Dimensions.get('window');

function Index(props) {
  const navigation = useNavigation();
  return (
    <TopBar>
      <ButtonIcon>
        <IconAntDesign
          name="arrowleft"
          size={30}
          color={colorTextPrimary}
          onPress={() => navigation.goBack()}
        />
      </ButtonIcon>

      <InputSearch
        placeholder="Search with name.."
        placeholderTextColor="gray"
        onChangeText={(value)=>props.handleSetKey(value)}
      />
    </TopBar>
  );
}

export default Index;

const TopBar = styled.View`
  flex-direction: row;
  background-color: #fafafa;
  height: 50px;
  border-bottom-color: gainsboro;
  border-bottom-width: 0.75px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: ${win.width}px;
`;

const ButtonIcon = styled.TouchableOpacity`
  width: 50px;
`;

const Title = styled.Text``;

const InputSearch = styled.TextInput`
  color: black;
  background-color: white;
  height: 40px;
  margin: 10px;
  border-radius: 20px;
  padding: 10px;
  width: ${win.width - 90}px;
  border-width: 0.75px;
  border-color: gainsboro;
`;

import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import styled from 'styled-components';

const win = Dimensions.get('window');
function ModelPublic(props) {
  const onClickItem = (name, value) => {
    props.handelChangeModelPublic(false);
    props.handelChangeTypePublic(value);
    props.handelChangePublic(name);
  };
  return (
    <BoxContainer>
      <Container>
        {/* <ButtonClose onPress={() => props.handelChangeModelPublic(false)}>
          <IconAntDesign name="closecircleo" size={30} />
        </ButtonClose> */}

        <ViewItem>
          <ScrollView>
            <Item onPress={() => onClickItem('Công khai', true)}>
              <Text>Công khai</Text>
            </Item>

            <Item onPress={() => onClickItem('Riêng tư', false)}>
              <Text>Riêng tư</Text>
            </Item>
          </ScrollView>
        </ViewItem>
      </Container>
    </BoxContainer>
  );
}

export default ModelPublic;


const BoxContainer = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.View`
  width: ${win.width - 20}px;
  background-color: white;
  position: relative;
  border-radius: 20px;
  margin-top:${win.height- win.height*0.8}px;
`;



const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ViewItem = styled.View`
  padding: 20px;
  /* padding-top: 30px; */
`;
const Item = styled.TouchableOpacity`
  height: 40px;
  /* border-bottom-color: gainsboro;
  border-bottom-width: 0.5px; */
  display: flex;
  justify-content: center;
`;

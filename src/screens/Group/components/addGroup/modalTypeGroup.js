import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import styled from 'styled-components';

import {GET_TYPE_GROUP} from '../../../../graphql/query';
import Loading from "../../../../components/general/loading";

const win = Dimensions.get('window');

function ModelTypeGroup(props) {
  const {loading,data: {getTypeGroup: types} = {}} = useQuery(GET_TYPE_GROUP);

  const onClickItem = (name) => {
    props.handelChangeModelTypeGroup(false);
    props.handelChangeTypeGroup(name);
  };

  if(loading) return (
    <BoxContainer>
      <Loading/>
    </BoxContainer>
  )
  return (
    <BoxContainer>
      <Container>
        {/* <ButtonClose onPress={() => props.handelChangeModelPublic(false)}>
          <IconAntDesign name="closecircleo" size={30} />
        </ButtonClose> */}

        <ViewItem>
          <ScrollView>
            {types && types.map((t,index)=>(
                <Item key={index} onPress={() => onClickItem(t.name)}>
              <Text>{t.name}</Text>
            </Item>
            ))}
          </ScrollView>
        </ViewItem>
      </Container>
    </BoxContainer>
  );
}

export default ModelTypeGroup;

const BoxContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content:center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.View`
  width: ${win.width - 20}px;
  background-color: white;
  position: relative;
  border-radius: 20px;
  /* margin-top: ${win.height - win.height * 0.8}px; */
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

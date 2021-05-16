import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {GET_CATAGORIES} from '../../../graphql/query';
import {
  ButtonClose,
  Container,
  Item,
  ViewItem,
  BoxContainer,
} from '../../../styles/components/product/modelCategories';

function ModelCategories(props) {
  const {loading, data: {getCategories: categories} = {}} = useQuery(
    GET_CATAGORIES,
  );

    const onClickItem=(name,slug)=>{
        props.handelChangeCategories(name);
        props.handelChangeSlug(slug);
        props.handelChangeModel(false)
    }
  return (
    <BoxContainer>
      <Container>
        <ButtonClose onPress={() => props.handelChangeModel(false)}>
          <IconAntDesign name="closecircleo" size={30} />
        </ButtonClose>
       
          <ViewItem>
            <Item key="all" onPress={()=>onClickItem("Tất cả sản phẩm","")}>
              <Text>Tất cả sản phẩm</Text>
            </Item>
            {categories &&
              categories.map(category => (
                <Item key={category.slug} onPress={()=>onClickItem(category.name,category.slug)}>
                  <Text>{category.name}</Text>
                </Item>
              ))}
          </ViewItem>
       
      </Container>
    </BoxContainer>
  );
}

export default ModelCategories;

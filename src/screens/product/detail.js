import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {GET_PRODUCT} from '../../graphql/query';
import TopBar from '../../components/general/topBar';
import Loading from '../../components/general/loading';
import {
  Container,
  DetailContent,
  ImageList,
  TextName,
  ViewTop,
  TextPrice,
  TextCategory,
  TextLocation,
  ButtonChat,
  ViewMid,
  TextDescribe,
  ViewBottom,
  BoxSeller,
  Avatar,
} from '../../styles/components/product/detail';
import {ScrollView} from 'react-native-gesture-handler';

function Detail() {
  const route = useRoute();
  const {productId} = route.params;

  const {loading, data: {getProduct: product} = {}} = useQuery(GET_PRODUCT, {
    variables: {productId: productId},
  });

  const renderItem = ({item}) => (
    <ImageList
      source={{
        uri: item,
      }}
    />
  );
  //return
  if (loading) return <Loading />;
  return (
    <Container>
      <TopBar title={product.body} />
      <ScrollView>
        {product && (
          <View>
            <DetailContent>
              <FlatList
                pagingEnabled={true}
                horizontal={true}
                data={product.image}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
              />
              <ViewTop>
                <TextName>{product.body}</TextName>
                <TextPrice>{product.price} đ</TextPrice>
                <TextCategory>{product.category.name}</TextCategory>
                <TextLocation>{product.address.location}</TextLocation>
                <ButtonChat>
                  <Icon name="message-text" size={30} color="white" />
                  <Text style={{color: 'white', marginLeft: 5}}>Nhắn tin</Text>
                </ButtonChat>
              </ViewTop>

              <ViewMid>
                <TextDescribe>Mô tả sản phẩm</TextDescribe>
                <Text>{product.describe}</Text>
              </ViewMid>

              <ViewBottom>
                <TextDescribe>Thông tin người bán</TextDescribe>
                <BoxSeller>
                  <Avatar source={{uri: product.seller.profile.avatar}} />
                  <TextName>{product.seller.displayname}</TextName>
                </BoxSeller>
              </ViewBottom>
            </DetailContent>
          </View>
        )}
      </ScrollView>
    </Container>
  );
}

export default Detail;

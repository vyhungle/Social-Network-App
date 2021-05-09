import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {GET_LOCATIONS} from '../../../graphql/query';
import {
  ButtonClose,
  Container,
  Item,
  ViewItem,
  BoxContainer,
} from '../../../styles/components/product/modelCategories';

function ModelLocation(props) {
  const {loading, data: {getLocations: locations} = {}} = useQuery(
    GET_LOCATIONS,
  );

  const onClickItem = (location, zipCode) => {
    props.handelChangeLocation(location);
    props.handelChangeModelLocation(false);
    props.handelChangeZipCode(zipCode);
  };
  return (
    <BoxContainer>
      <Container>
        <ButtonClose onPress={() => props.handelChangeModelLocation(false)}>
          <IconAntDesign name="closecircleo" size={30} />
        </ButtonClose>

        <ViewItem>
          <ScrollView>
            <Item key="all" onPress={() => onClickItem('All Locations', '')}>
              <Text>All Locations</Text>
            </Item>
            {locations &&
              locations.map((location, index) => (
                <Item
                  key={index}
                  onPress={() =>
                    onClickItem(location.location, location.zipcode)
                  }>
                  <Text>{location.location}</Text>
                </Item>
              ))}
          </ScrollView>
        </ViewItem>
      </Container>
    </BoxContainer>
  );
}

export default ModelLocation;

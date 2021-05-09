import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  BoxTop,
  ViewPicker,
  BoxPicker,
  ViewTitle,
  TextTitle,
  ViewSort,
} from '../../../styles/components/product/catalog';
function Catalog(props) {
  return (
    <BoxTop>
      <ViewTitle>
        <TextTitle numberOfLines={1}>{props.category}</TextTitle>
      </ViewTitle>
      <BoxPicker>
        {props.sortProduct === -1 ? (
          <ViewSort  onPress={() => props.handleChangeSort(1)}>
            <Icon name="sort-amount-down" size={15} />
          </ViewSort>
        ) : (
          <ViewSort onPress={() => props.handleChangeSort(-1)}>
            <Icon name="sort-amount-up" size={15} />
          </ViewSort>
        )}
        <ViewPicker onPress={() => props.handelChangeModel(true)}>
          <Text numberOfLines={1}>{props.category}</Text>
        </ViewPicker>
        <ViewPicker onPress={() => props.handelChangeModelLocation(true)}>
          <Text numberOfLines={1}>{props.location}</Text>
        </ViewPicker>
      </BoxPicker>
    </BoxTop>
  );
}

export default Catalog;

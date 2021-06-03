import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Container,
  InputSearch,
} from '../../../styles/components/createChat/formChat';



function FormSearch(props) {
  
  const [value,setValue]=React.useState("");
  const handleChange=(values)=>{
    setValue(values)
    props.handleChangeSearch(value)
  }
  return (
    <Container>
      <View style={styles.Icon}>
        <Icon name="search1" size={20} />
      </View>
      <InputSearch
        placeholder="Tìm kiếm người và nhóm"
        placeholderTextColor="gray"
        values={value}
        onChangeText={(values)=>handleChange(values)}
      />
    </Container>
  );
}

export default FormSearch;

const styles = StyleSheet.create({
  Icon: {
    height: 60,
    width: 70,
    borderColor: 'gainsboro',
    borderWidth: 0.75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius:0,
    borderTopRightRadius:0,
    borderRightWidth:0,

  },
});

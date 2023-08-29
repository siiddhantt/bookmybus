import React, {useState} from 'react';
import {Dropdown as DropdownPicker} from 'react-native-element-dropdown';
import styles from './styles';

import MapFrom from './../../svgComponents/MapFrom';
import MapTo from './../../svgComponents/MapTo';
import Person from './../../svgComponents/Person';
import Date from './../../svgComponents/Date';
import Clock from './../../svgComponents/Clock';
import {View} from 'react-native';

const Dropdown = props => {
  const handleChange = data => {
    props.handleDrop(data);
  };
  return (
    <DropdownPicker
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      itemTextStyle={styles.itemTextStyle}
      iconStyle={styles.iconStyle}
      data={props.data}
      search={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={props.placeholder}
      value={props.value}
      onChange={item => {
        handleChange(item.value);
      }}
      activeColor={'#EFEEF6'}
      containerStyle={{borderRadius: 8}}
      itemContainerStyle={{borderRadius: 8}}
      renderLeftIcon={() =>
        props.icon == 'from' ? (
          <View style={styles.iconStyle1}>
            <MapFrom />
          </View>
        ) : props.icon == 'to' ? (
          <View style={styles.iconStyle1}>
            <MapTo />
          </View>
        ) : props.icon == 'person' ? (
          <View style={styles.iconStyle2}>
            <Person />
          </View>
        ) : props.icon == 'date' ? (
          <View style={styles.iconStyle2}>
            <Date />
          </View>
        ) : (
          <View style={styles.iconStyle2}>
            <Clock />
          </View>
        )
      }
    />
  );
};

export default Dropdown;

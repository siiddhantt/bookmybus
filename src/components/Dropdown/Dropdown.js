import React, { useState } from 'react';
import { Dropdown as DropdownPicker } from 'react-native-element-dropdown';
import styles from './styles';

import MapFrom from './../../svgComponents/MapFrom';
import MapTo from './../../svgComponents/MapTo';
import Person from './../../svgComponents/Person';
import Date from './../../svgComponents/Date';
import Clock from './../../svgComponents/Clock';
import { View } from 'react-native';

const Dropdown = (props) => {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const [value, setValue] = useState(null);
    return (
        <DropdownPicker
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.itemTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={props.placeholder}
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderLeftIcon={() => (
                props.icon == 'from' ? <View style={styles.iconStyle1}><MapFrom /></View> : (props.icon == 'to' ? <View style={styles.iconStyle1}><MapTo /></View> : (props.icon == 'person' ? <View style={styles.iconStyle2}><Person /></View> : (props.icon == 'date' ? <View style={styles.iconStyle2}><Date /></View> : <View style={styles.iconStyle2}><Clock /></View>)))
            )}
        />
    );
};

export default Dropdown;
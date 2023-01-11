import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

const NavBar = ({ currentScreen }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
        </View>
    );
};

export default NavBar;
import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import NavBar from '../../components/NavBar';

export default function Schedule() {
    const navigation = useNavigation();
    return (
        <View style={styles.scrollView}>
            <ScrollView>
            </ScrollView>
            <NavBar currentScreen={'Schedule'} />
        </View>
    );
};
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ToastAndroid, Animated, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import NavBar from '../../components/NavBar';

export default function HomePage() {
    const navigation = useNavigation();
    return (
        <View style={styles.scrollView}>
            <ScrollView>
            </ScrollView>
            <NavBar currentScreen={'HomePage'} />
        </View>
    );
};
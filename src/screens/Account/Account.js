import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import NavBar from '../../components/NavBar';

export default function Account() {
    return (
        <View style={styles.scrollView}>
            <ScrollView>
            </ScrollView>
            <NavBar currentScreen={'Account'} />
        </View>
    );
};
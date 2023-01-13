import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import NavBar from '../../components/NavBar';

export default function HomePage() {
    return (
        <View style={styles.scrollView}>
            <ScrollView>
            </ScrollView>
            <NavBar currentScreen={'HomePage'} />
        </View>
    );
};
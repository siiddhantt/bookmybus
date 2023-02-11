import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import styles from './styles';

import NavBar from '../../components/NavBar';
import Dropdown from '../../components/Dropdown';

export default function HomePage() {
    return (
        <View style={styles.scrollView}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Where would you like to go?</Text>
                </View>
                <View style={styles.dropView1}>
                    <Dropdown placeholder='Select pickup location' icon='from' />
                </View>
                <View style={styles.dropView1}>
                    <Dropdown placeholder='Select drop-off location' icon='to' />
                </View>
                <View style={styles.dropView2}>
                    <View style={styles.dropNum}>
                        <Dropdown placeholder='Seats' icon='person' />
                    </View>
                    <View style={styles.dropDate}>
                        <Dropdown placeholder='Date' icon='date' />
                    </View>
                    <View style={styles.dropTime}>
                        <Dropdown placeholder='Time' icon='time' />
                    </View>
                </View>
                <Pressable style={styles.btnStyle}>
                    <Text style={styles.btnTxt}>Let's go!</Text>
                </Pressable>
            </ScrollView>
            <NavBar currentScreen={'HomePage'} />
        </View>
    );
};
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Pressable, ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import styles from './styles';

import NavBar from '../../components/NavBar';

async function onLogout() {
    await GoogleSignin.signOut();
    auth().signOut()
    return ToastAndroid.show('Logged out', ToastAndroid.SHORT);
};

export default function Account() {
    return (
        <View style={styles.scrollView}>
            <ScrollView>
                <View style={styles.container}>
                    <Pressable style={styles.btnStyle} onPress={() => onLogout()}>
                        <Text style={styles.btnTxt}>Logout</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <NavBar currentScreen={'Account'} />
        </View>
    );
};
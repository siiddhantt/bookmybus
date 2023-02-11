import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import Home from './../../svgComponents/Home';
import FilledHome from './../../svgComponents/FilledHome';
import Calendar from './../../svgComponents/Calendar';
import FilledCalendar from './../../svgComponents/FilledCalendar';
import Account from './../../svgComponents/Account';
import FilledAccount from './../../svgComponents/FilledAccount';

const NavBar = ({ currentScreen }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
            <Pressable style={styles.navItem} onPress={() => navigation.navigate("HomePage")}>
                {currentScreen === "HomePage" ? <FilledHome /> : <Home />}
                <Text style={[currentScreen === "HomePage" ? styles.blueText : styles.blackText, styles.txt]}>Home</Text>
            </Pressable>
            <Pressable style={styles.navItem} onPress={() => navigation.navigate("Schedule")}>
                {currentScreen === "Schedule" ? <FilledCalendar /> : <Calendar />}
                <Text style={[currentScreen === "Schedule" ? styles.blueText : styles.blackText, styles.txt]}>Schedule</Text>
            </Pressable>
            <Pressable style={styles.navItem} onPress={() => navigation.navigate("Account")}>
                {currentScreen === "Account" ? <FilledAccount /> : <Account />}
                <Text style={[currentScreen === "Account" ? styles.blueText : styles.blackText, styles.txt]}>Account</Text>
            </Pressable>
        </View>
    );
};

export default NavBar;
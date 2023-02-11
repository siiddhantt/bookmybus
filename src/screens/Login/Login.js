import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import styles from './styles';

export default function Login(props) {
    return (
        <View style={styles.scrollView}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.lottView}>
                        <Lottie source={require('../../assets/BusAnimation2.json')}
                            autoPlay loop />
                    </View>
                    <View>
                        <Text style={styles.body}>Welcome to BookMyBus!</Text>
                    </View>
                    <View style={styles.btnView}>
                        <GoogleSigninButton style={styles.btnStyle}
                            size={GoogleSigninButton.Size.Wide}
                            onPress={props.onGoogleButtonPress} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
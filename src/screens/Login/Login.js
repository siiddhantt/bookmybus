import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import styles from './styles';

export default function Login(props) {
    return (
        <View style={styles.scrollView}>
            <LinearGradient colors={['#cae7fa', '#a1c4fd']} style={styles.lgStyle}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.lottView}>
                            <Lottie source={require('../../assets/BusAnimation2.json')}
                                autoPlay loop />
                        </View>
                        <View style={styles.txtView}>
                            <Text style={styles.bodyTxt}>Welcome to BookMyBus!</Text>
                        </View>
                        <View style={styles.txtView}>
                            <Text style={styles.detailTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.btnView}>
                        <GoogleSigninButton style={styles.btnStyle}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={props.onGoogleButtonPress} />
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};
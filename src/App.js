import React, {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import API_Service from './api/service';

import Login from './screens/Login';
import HomePage from './screens/HomePage';
import Schedule from './screens/Schedule';
import Account from './screens/Account';
import Tickets from './screens/Tickets';
import Slots from './screens/Slots';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '89516330676-eiomtdgslkrahr0hvssaseea4hobrpkt.apps.googleusercontent.com',
    });
  }, []);
  async function onGoogleButtonPress() {
    try {
      const {idToken, user} = await GoogleSignin.signIn();
      if (user.email.indexOf('@iiitdmj.ac.in') > -1) {
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const userCredential = await auth().signInWithCredential(
          googleCredential,
        );
        try {
          await API_Service.addNewUser({
            user_id: userCredential.user.uid,
            name: userCredential.user.displayName,
            email: userCredential.user.email,
          });
        } catch (err) {
          console.error('Error posting data:', err);
        }
        return userCredential;
      } else {
        await GoogleSignin.signOut();
        return ToastAndroid.show(
          'Only institute Email ID allowed. Try again!',
          ToastAndroid.SHORT,
        );
      }
    } catch (err) {
      return ToastAndroid.show('Login cancelled', ToastAndroid.SHORT);
    }
  }
  auth().onAuthStateChanged(user => {
    user ? setAuthenticated(true) : setAuthenticated(false);
  });
  const Stack = createStackNavigator();
  if (authenticated)
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            animationEnabled: true,
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Tickets" component={Tickets} />
          <Stack.Screen name="Slots" component={Slots} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  else return <Login onGoogleButtonPress={onGoogleButtonPress} />;
}

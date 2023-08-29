import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import NavBar from '../../components/NavBar';
import Alert from '../../components/Alert';

import Help from './../../svgComponents/Help';
import LogOut from './../../svgComponents/LogOut';
import Ticket from './../../svgComponents/Ticket';

async function onLogout() {
  await GoogleSignin.signOut();
  auth().signOut();
  return ToastAndroid.show('Logged out', ToastAndroid.SHORT);
}

const Option = ({text, description, icon, optionBg, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.optionView, {backgroundColor: optionBg}]}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={styles.optionContainer}>
        <View style={styles.optionIconContainer}>{icon}</View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.option}>{text}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Account() {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [infoAlert, setInfoAlert] = useState(false);

  useEffect(() => {
    const user = auth().currentUser;
    setCurrentUser({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    });
  }, []);

  return (
    <View style={styles.scrollView}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: currentUser.photo
                ? currentUser.photo
                : 'https://ui-avatars.com/api/?name=a&format=png',
            }}
            style={styles.avtar}
          />
          <Text style={styles.userName}>{currentUser.name}</Text>
          <Text style={styles.userMail}>{currentUser.email}</Text>
        </View>
        <Text style={styles.heading}>App</Text>
        <View style={styles.modeContainer}>
          <Option
            text="Tickets"
            description="View all your past bookings"
            icon={<Ticket />}
            onPress={() => {
              navigation.navigate('Tickets');
            }}
          />
        </View>
        <Text style={styles.heading}>General</Text>
        <View style={styles.modeContainer}>
          <Option
            text="Help"
            description="Get help from us or report an issue"
            icon={<Help />}
            onPress={() => console.log(currentUser.photo)}
          />
          <Option
            text="Log out"
            description="Log out from this device"
            icon={<LogOut />}
            onPress={() => setDeleteModal(true)}
          />
        </View>
        <Text style={styles.heading}>BookMyBus © </Text>
        <Alert
          isVisible={deleteModal}
          dismiss={() => setDeleteModal(false)}
          title="Log out"
          message="Are you sure you want to log out from this account"
          buttons={[
            {onPress: () => onLogout(), title: 'Yes'},
            {cancellable: true, title: 'No'},
          ]}
        />
        <Alert
          isVisible={infoAlert}
          dismiss={() => setInfoAlert(false)}
          title="Password required"
          message="Please re-enter your password to download information"
          buttons={[
            {onPress: () => console.log('Test'), title: 'Okay'},
            {cancellable: true, title: 'Cancel'},
          ]}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#737373"
            style={styles.rowInput}
          />
        </Alert>
      </ScrollView>
      <NavBar currentScreen={'Account'} />
    </View>
  );
}

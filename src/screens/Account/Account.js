import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Pressable,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import NavBar from '../../components/NavBar';
import Alert from '../../components/Alert';

async function onLogout() {
  await GoogleSignin.signOut();
  auth().signOut();
  return ToastAndroid.show('Logged out', ToastAndroid.SHORT);
}

const Option = ({onPress, text, icon}) => {
  return (
    <View style={styles.optionView}>
      <Pressable style={styles.optionContainer} onPress={onPress}>
        <Icon name={icon} color="#303b4a" size={26} />
        <Text style={styles.option}>{text}</Text>
        <Icon name="chevron-forward-outline" color="#212121" size={27} />
      </Pressable>
    </View>
  );
};

export default function Account() {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [monetizationModal, setMonetizationModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
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
          <Image source={{uri: currentUser.photo}} style={styles.avtar} />
          <Text style={styles.userName}>{currentUser.name}</Text>
          <Text style={styles.userMail}>{currentUser.email}</Text>
        </View>
        <Text style={styles.heading}>App</Text>
        <View style={styles.modeContainer}>
          <Option
            text="My Tickets"
            icon="download-outline"
            onPress={() => {
              navigation.navigate('Tickets');
            }}
          />
        </View>
        <Text style={styles.heading}>General</Text>
        <View style={styles.modeContainer}>
          <Option
            text="Help & Support"
            icon="close-circle-outline"
            onPress={() => props.navigation.navigate('BlockedList')}
          />
          <Option
            text="Log Out"
            icon="trash-outline"
            onPress={() => setDeleteModal(true)}
          />
        </View>
        <Text style={styles.heading}>BookMyBus © </Text>
        <Alert
          isVisible={deleteModal}
          dismiss={() => setDeleteModal(false)}
          title="Log Out"
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

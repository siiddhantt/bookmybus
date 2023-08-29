import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import API_Service from '../../api/service';
import styles from './styles';
import FromTo from '../../assets/FromTo.json';

import NavBar from '../../components/NavBar';
import Dropdown from '../../components/Dropdown';

export default function HomePage() {
  const navigation = useNavigation();
  const [source, setSource] = useState('');
  const [dest, setDest] = useState('');
  const [seats, setSeats] = useState(0);
  const [date, setDate] = useState('');
  const fromData = [];
  const [toData, setToData] = useState([{label: ' ', value: ' '}]);
  const [loading, setLoading] = useState(false);
  const fromMap = new Map();
  const fromTo = Object.keys(FromTo);
  fromTo.forEach(data => {
    fromMap.set(data, FromTo[data]);
    fromData.push({label: data, value: data});
  });
  const seatData = [
    {label: '1', value: 1},
    {label: '2', value: 2},
  ];
  const dateData = [
    {label: 'Today', value: 'Today'},
    {label: 'Tomorrow', value: 'Tomorrow'},
  ];
  const handleSource = data => {
    setSource(data);
    setDest('');
    const arr = fromMap.get(data);
    const tmp = [];
    arr.forEach(dest => {
      tmp.push({label: dest, value: dest});
    });
    setToData(tmp);
  };
  const handleDest = data => {
    setDest(data);
  };
  async function handlePress() {
    setLoading(true);
    const response = await API_Service.getValidSlots({
      source: source,
      destination: dest,
      slot: Date.now(),
    });
    let slots = [];
    if (response.data.success) slots = response.data.slots;
    navigation.navigate('Slots', {slots, seats});
    setLoading(false);
  }
  return (
    <View style={styles.scrollView}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Where would you like to go?</Text>
        </View>
        <View style={styles.dropView1}>
          <Dropdown
            placeholder="Select pickup location"
            icon="from"
            data={fromData}
            value={source}
            handleDrop={handleSource}
          />
        </View>
        <View style={styles.dropView1}>
          <Dropdown
            placeholder="Select drop-off location"
            icon="to"
            data={toData}
            value={dest}
            handleDrop={handleDest}
          />
        </View>
        <View style={styles.dropView2}>
          <View style={styles.dropNum}>
            <Dropdown
              placeholder="Seats"
              icon="person"
              data={seatData}
              value={seats}
              handleDrop={data => {
                setSeats(data);
              }}
            />
          </View>
          <View style={styles.dropDate}>
            <Dropdown
              placeholder="Date"
              icon="date"
              data={dateData}
              value={date}
              handleDrop={data => {
                setDate(data);
              }}
            />
          </View>
        </View>
        <Pressable
          style={({pressed}) => [
            pressed ? {opacity: 0.9} : {},
            styles.btnStyle,
          ]}
          onPress={() => {
            handlePress();
          }}>
          <Text style={styles.btnTxt}>
            {loading ? <ActivityIndicator color="#FFFFFF" /> : "Let's go!"}
          </Text>
        </Pressable>
      </ScrollView>
      <NavBar currentScreen={'HomePage'} />
    </View>
  );
}

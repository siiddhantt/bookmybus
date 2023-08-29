import React, {useState, useEffect} from 'react';
import {View, Pressable, FlatList, Text, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import RazorpayCheckout from 'react-native-razorpay';
import API_Service from '../../api/service';
const emptyStateImage = require('../../assets/images/NoSlots.png');
import EmptyState from '@freakycoder/react-native-empty-state';
import styles from './styles';

import Ticket from '../../components/Ticket';

export default function Slots() {
  const route = useRoute();
  const navigation = useNavigation();
  const slotsData = route.params.slots;
  const seats = route.params.seats;
  const options = {
    description: 'institute bus fare',
    image: 'https://imgur.com/aQ3rHaa.png',
    currency: 'INR',
    key: 'rzp_test_tz43B2LYh5t2SS',
    name: 'BookMyBus',
    prefill: {
      email: auth().currentUser.email,
      name: auth().currentUser.name,
    },
    theme: {color: '#6C61AF'},
  };
  async function handleSuccess(data) {
    for (let i = 0; i < seats; i++) {
      await API_Service.addNewBooking({
        user_id: auth().currentUser.uid,
        source: data.source,
        destination: data.destination,
        slot: data.slot,
        price: data.price,
      });
    }
    navigation.navigate('Tickets');
  }
  return (
    <View style={{backgroundColor: '#1C1A29', height: '100%'}}>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <View>
          {slotsData.length == 0 ? (
            <View style={{marginTop: 140}}>
              <EmptyState
                buttonText="Refresh"
                imageSource={emptyStateImage}
                title="No slots available"
                description="We cannot find available slots, try again later"
              />
            </View>
          ) : (
            <FlatList
              data={slotsData}
              keyExtractor={(object, index) => index}
              renderItem={({item}) => {
                const date = new Date(parseInt(item.slot));
                const dateString = date.toLocaleString();
                return (
                  <Pressable
                    title=""
                    style={[
                      styles.buttonMyPurchase,
                      {height: 120, marginTop: 10, padding: 10},
                    ]}
                    onPress={() => {
                      RazorpayCheckout.open({
                        ...options,
                        amount: item.price * seats * 100,
                      })
                        .then(data => {
                          handleSuccess(item);
                        })
                        .catch(error => {});
                    }}>
                    <View
                      style={{
                        flex: 1,
                        height: '100%',
                      }}>
                      <View style={{flex: 1}}>
                        <View
                          style={{
                            marginRight: 20,
                            width: '100%',
                            flexDirection: 'row',
                          }}>
                          <View style={{width: '40%'}}>
                            <Text
                              style={[
                                styles.smallText,
                                {fontWeight: 'bold', opacity: 0.6},
                              ]}>
                              To
                            </Text>
                            <Text style={[styles.standardText, {}]}>
                              {item.destination}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={[
                                styles.smallText,
                                {fontWeight: 'bold', opacity: 0.6},
                              ]}>
                              From
                            </Text>
                            <Text style={[styles.standardText]}>
                              {item.source}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={[styles.smallText]}>{dateString}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.01,
                        height: '100%',
                        backgroundColor: '#6C61AF',
                        marginRight: 20,
                      }}
                    />
                    <View
                      style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '100%',
                      }}>
                      <View style={{flex: 2, height: '100%'}}>
                        <View style={{flex: 1}}>
                          <Text
                            style={[
                              styles.smallText,
                              {
                                fontWeight: 'bold',
                                opacity: 0.6,
                              },
                            ]}>
                            Avl. Seats
                          </Text>
                          <Text style={styles.standardText}>
                            {item.vacantSeats}
                          </Text>
                        </View>

                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                          <Text
                            style={[
                              styles.smallText,
                              {
                                color: '#FFFFFF',
                                opacity: 0.6,
                                fontWeight: 'bold',
                              },
                            ]}>
                            Total
                          </Text>
                          <Text
                            style={[styles.standardText, {fontWeight: 'bold'}]}>
                            ₹{item.price * seats}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                );
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

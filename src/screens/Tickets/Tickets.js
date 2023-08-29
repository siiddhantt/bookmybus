import React, {useState, useEffect} from 'react';
import {View, Pressable, FlatList, Image, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import API_Service from '../../api/service';
import styles from './styles';

import Ticket from '../../components/Ticket';

export default function Tickets() {
  const [modal, setDeleteModal] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const [date, setDate] = useState(0);
  const postData = async () => {
    try {
      const response = await API_Service.getUserBookings({
        user_id: auth().currentUser.uid,
      });
      if (response.data.success) setTicketData(response.data.bookings);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  const onPress = data => {
    setDate(data.slot);
    setDeleteModal(true);
  };
  useEffect(() => {
    postData();
  }, []);
  return (
    <View style={{backgroundColor: '#1C1A29', height: '100%'}}>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <View>
          <FlatList
            data={ticketData}
            keyExtractor={(object, index) => index}
            renderItem={({item}) => {
              const date = new Date(parseInt(item.slot));
              const dateString = date.toLocaleString();
              return (
                <Pressable
                  title=""
                  style={[
                    styles.buttonMyPurchase,
                    {height: 100, marginTop: 10, padding: 10},
                  ]}
                  onPress={() => {
                    onPress(item);
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
                        <View style={{width: '50%'}}>
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
                      marginHorizontal: 10,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
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
                          Seat
                        </Text>
                        <Text style={styles.standardText}>101</Text>
                      </View>

                      <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text
                          style={[
                            styles.smallText,
                            {color: '#FFFFFF', opacity: 0.6},
                          ]}>
                          TOTAL
                        </Text>
                        <Text
                          style={[styles.standardText, {fontWeight: 'bold'}]}>
                          ₹{item.price}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                        }}
                        source={{
                          uri:
                            'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=' +
                            `${item._id} ${item.slot}`,
                        }}
                      />
                      <Text
                        style={{
                          color: '#FFFFFF',
                          opacity: 0.6,
                          fontSize: 8,
                          marginTop: 10,
                        }}>
                        {item.slot}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}></FlatList>
        </View>
        <Ticket
          _id={auth().currentUser.email}
          slot={date}
          isVisible={modal}
          dismiss={() => setDeleteModal(false)}
          title="Ticket"
          message="Show this QR to the bus conductor"
        />
      </View>
    </View>
  );
}

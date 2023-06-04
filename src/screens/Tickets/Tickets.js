import React, {useState, useEffect} from 'react';
import {View, Pressable, FlatList, Image, Text} from 'react-native';
import axios from 'axios';
import styles from './styles';

export default function Tickets() {
  const [ticketData, setTicketData] = useState([]);
  const postData = async () => {
    try {
      const response = await axios.post('http://16.171.1.255/auth/bookings', {
        user: 'CnS81KgmcwZDlVyenKRbWTgm1cq1',
      });
      if (response.data.success) setTicketData(response.data.bookings);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
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
              const dateString = date.toString();
              return (
                <Pressable
                  title=""
                  style={[
                    styles.buttonMyPurchase,
                    {height: 100, marginTop: 10, padding: 10},
                  ]}
                  onPress={() => console.log(dateString)}>
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
                          $100
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
            }}
          />
        </View>
      </View>
    </View>
  );
}

import React from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const Ticket = props => {
  const {isVisible, dismiss, title, message, buttons, children, _id, slot} =
    props;
  const date = new Date(parseInt(slot));
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackButtonPress={dismiss}
      onBackdropPress={dismiss}
      useNativeDriverForBackdrop
      {...props}>
      <View style={styles.viewContainer}>
        <Image
          style={{
            alignSelf: 'center',
            width: 120,
            height: 120,
          }}
          source={{
            uri:
              'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=' +
              `${_id} ${slot}`,
          }}
        />
        <Text style={styles.modalText}>{message}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <View>
              <Text style={styles.modalHeading}>From</Text>
              <Text style={styles.modalPlace}>Institute</Text>
            </View>
            <View>
              <Text style={styles.modalHeading}>To</Text>
              <Text style={styles.modalPlace}>Sadar</Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <View>
              <Text style={styles.modalHeading}>Time</Text>
              <Text style={styles.modalPlace}>{date.toLocaleTimeString()}</Text>
            </View>
            <View>
              <Text style={styles.modalHeading}>Date</Text>
              <Text style={styles.modalPlace}>{date.toLocaleDateString()}</Text>
            </View>
          </View>
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default Ticket;

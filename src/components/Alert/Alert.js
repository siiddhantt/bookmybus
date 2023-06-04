import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const Alert = props => {
  const { isVisible, dismiss, title, message, buttons, children } = props;
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackButtonPress={dismiss}
      onBackdropPress={dismiss}
      useNativeDriverForBackdrop
      {...props}>
      <View style={styles.viewContainer}>
        <Text style={styles.modalHeading}>{title}</Text>
        <Text style={styles.modalText}>{message}</Text>
        {children}
        <View style={styles.modalOptionContainer}>
          {buttons &&
            buttons.map(item => {
              return (
                <Pressable
                  onPress={item?.cancellable ? dismiss : item?.onPress}
                  key={Math.random() * 10}>
                  <Text style={styles.actionText}>{item?.title}</Text>
                </Pressable>
              );
            })}
        </View>
      </View>
    </Modal>
  );
};

export default Alert;

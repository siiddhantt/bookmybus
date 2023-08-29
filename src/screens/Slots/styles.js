import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  buttonMyPurchase: {
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
    backgroundColor: '#2F2C44',
    padding: 5,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 1, height: 5},
    borderWidth: 0.5,
  },
  smallText: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
  },
  standardText: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
  },
});

export default styles;

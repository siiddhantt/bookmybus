import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
  },
  viewContainer: {
    backgroundColor: '#EFEEF6',
    height: '35%',
    width: '70%',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 13,
  },
  modalText: {
    marginTop: 4,
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#9098a3',
    textAlign: 'center',
  },
  actionText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13.8,
    color: '#212121',
    marginHorizontal: 12,
  },
  modalOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  modalHeading: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#212121',
  },
  modalPlace: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#212121',
  },
});

export default styles;

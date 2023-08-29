import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#1C1A29',
    width: '100%',
  },
  container: {
    flex: 1,
    marginBottom: 60,
  },
  btnStyle: {
    marginTop: 50,
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 5,
  },
  btnTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#1C1A29',
    flexGrow: 1,
  },
  profileContainer: {
    width: '100%',
    padding: 13,
    backgroundColor: '#1C1A29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeContainer: {
    width: '100%',
    backgroundColor: '#1C1A29',
  },
  avtar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    color: '#FFFFFF',
    marginVertical: 5,
  },
  userMail: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#9C9C9C',
    paddingVertical: 10,
    marginHorizontal: 12,
  },
  optionView: {
    padding: 5,
    elevation: 2,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    marginTop: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  optionIconContainer: {
    height: 22,
    width: 22,
    marginBottom: 20,
  },
  optionTextContainer: {
    width: '80%',
  },
  option: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlignVertical: 'center',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.45)',
  },
  info: {
    backgroundColor: '#f8f9fb',
    fontFamily: 'Roboto-Medium',
    color: '#111111',
    fontSize: 15,
  },
  rowInput: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  modalOption: {
    flexDirection: 'row',
    width: '95%',
    height: 8,
    alignSelf: 'center',
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#efefef',
    paddingHorizontal: 10,
  },
  modalText: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    marginHorizontal: 20,
  },
  modalContainer: {
    marginHorizontal: 11,
    marginBottom: 4,
  },
});

export default styles;

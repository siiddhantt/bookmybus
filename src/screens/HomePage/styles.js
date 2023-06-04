import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#1C1A29',
    width: '100%',
  },
  heading: {
    marginTop: 140,
    marginBottom: 25,
    marginHorizontal: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  dropView1: {
    marginHorizontal: 20,
  },
  dropView2: {
    marginTop: 8,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropNum: {
    flexGrow: 2,
  },
  dropDate: {
    flexGrow: 2,
  },
  dropTime: {
    flexGrow: 2,
  },
  btnStyle: {
    marginTop: 50,
    marginHorizontal: 28,
    marginBottom: 80,
    backgroundColor: '#6C61AF',
    padding: 15,
    borderRadius: 5,
  },
  btnTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default styles;

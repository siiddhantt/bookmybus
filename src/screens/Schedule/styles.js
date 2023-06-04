import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#1C1A29',
    width: '100%',
    paddingBottom: 65,
  },
  segmentView: {
    paddingHorizontal: 16,
  },
  segment: {
    marginVertical: 5,
    backgroundColor: '#2F2C44',
    borderRadius: 10,
  },
  ACTIVE: {
    color: 'rgb(255, 255, 255)',
  },
  INACTIVE: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  heading: {
    marginTop: 10,
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

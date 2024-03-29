import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2F2C44',
    padding: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 15,
    elevation: 10,
  },
  navItem: {
    padding: 4,
    flexDirection: 'column',
    alignItems: 'center',
  },
  blueText: {
    color: '#1A73E8',
    fontWeight: '600',
  },
  whiteText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  blackText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '400',
  },
  txt: {
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
  },
});
export default styles;

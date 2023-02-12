import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    lgStyle: {
        height: '100%'
    },
    container: {
        marginTop: 140,
        marginBottom: 20,
        marginHorizontal: 20
    },
    heading: {
        color: '#000000',
        fontFamily: 'Poppins-Bold',
        fontSize: 30
    },
    lottView: {
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 100
    },
    txtView: {
        marginHorizontal: 10
    },
    bodyTxt: {
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    detailTxt: {
        marginTop: 2,
        marginHorizontal: '5%',
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Poppins-Light',
        fontSize: 15
    },
    btnView: {
        marginBottom: 10,
        marginHorizontal: 20
    },
    btnStyle: {
        alignSelf: 'center',
        width: 252,
        height: 48
    }
});

export default styles;
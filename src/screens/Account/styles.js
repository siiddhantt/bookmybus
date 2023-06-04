import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#CAE7FA",
        width: "100%",
    },
    container: {
        flex: 1,
        marginBottom: 60,
    },
    btnStyle: {
        marginTop: 50,
        backgroundColor: '#000000',
        padding: 15,
        borderRadius: 5
    },
    btnTxt: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    contentContainer: {
        backgroundColor: '#f6f6f6',
        flexGrow: 1,
    },
    profileContainer: {
        width: '100%',
        padding: 13,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modeContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    avtar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userName: {
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        color: '#212121',
        marginVertical: 5,
    },
    userMail: {
        color: '#5F6368',
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    heading: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#9C9C9C',
        paddingVertical: 10,
        marginHorizontal: 12,
    },
    option: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#5F6368',
        width: '80%',
    },
    optionView: {
        padding: 5,
        elevation: 2,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        alignItems: 'center',
        marginVertical: 8.6,
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
    }
});

export default styles;
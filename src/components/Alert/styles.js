import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
    },
    viewContainer: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 6,
        paddingVertical: 13,
        paddingHorizontal: 13,
    },
    modalText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16.7,
        color: '#9098a3',
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
        fontFamily: 'Roboto-Black',
        fontSize: 22,
        color: '#212121',
        textAlign: 'center',
    },
});

export default styles;
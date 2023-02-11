import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#CAE7FA",
        width: "100%",
    },
    heading: {
        marginTop: 140,
        marginBottom: 25,
        marginHorizontal: 20,
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    dropView1: {
        marginHorizontal: 20
    },
    dropView2: {
        marginTop: 8,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropNum: {
        flexGrow: 2
    },
    dropDate: {
        flexGrow: 3
    },
    dropTime: {
        flexGrow: 2
    },
    btnStyle: {
        marginTop: 50,
        marginHorizontal: 28,
        backgroundColor: '#000000',
        padding: 15,
        borderRadius: 5
    },
    btnTxt: {
        color: '#FFFFFF',
        textAlign: 'center'
    }
});

export default styles;
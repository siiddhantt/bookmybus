import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: 65
    },
    segment: {
        marginVertical: 5,
        backgroundColor: "#C2E7FF",
        borderRadius: 10
    },
    ACTIVE: {
        color: 'rgb(255, 255, 255)'
    },
    INACTIVE: {
        color: 'rgba(0, 0, 0, 0.5)'
    },
    heading: {
        marginTop: 10,
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Work Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default styles;
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingBottom: 65
    },
    segmentView: {
        paddingHorizontal: 16
    },
    segment: {
        marginVertical: 5,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 10
    },
    ACTIVE: {
        color: 'rgb(255, 255, 255)'
    },
    INACTIVE: {
        color: 'rgba(0, 0, 0, 0.7)'
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
import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        borderWidth: 6,
        backgroundColor: '#000000',
        justifyContent: 'center'
    },

    ecranContainer: {
        flex: 2,
        backgroundColor: '#000000'
    },

    clavierContainer: {
        borderColor: '#193441',
        flex: 8,
        backgroundColor: '#000000',
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 4,
        justifyContent: 'space-between',
    },

    inputRow2: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        borderWidth: 4,
        justifyContent: 'space-between',
    },

    equal: {
        flex: 3,
        width: "60%",
        backgroundColor: '#193441',
    },

    inputButton: {
        width: '24%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 4,
        borderRadius: 6,
        borderColor: '#193441',
        
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20,
        justifyContent: 'space-around',
    },

});

export default Style;
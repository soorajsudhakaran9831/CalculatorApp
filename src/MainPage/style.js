import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#3e403f', 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    displayContainer: { 
        flex: 1.5, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
        padding: 20, 
        
    }, 
    displayText: { 
        fontSize: 48, 
        color: '#8c8e8d', 
    }, 
    buttonContainer: { 
        flex: 3, 
        width: '80%', 
    }, 
    row: { 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 10, 
    }, 
    button: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 5, 
        padding: 10, 
    }, 
    buttonText: { 
        fontSize: 34, 
        color: '#656766',
    }, 
    zeroButton: { 
        flex: 2, 
        paddingLeft: 15, 
    }, 
    zeroButtonText: { 
        marginLeft: 40, 
    }, 
    equalButton: { 
        flex: 2, 
        borderRadius:50, 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    equalButtonText: { 
        fontSize: 34, 
        color: '#9e9d7c', 
    }, 
    clearButton: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 10, 
        padding: 10, 
    }, 
    clearButtonText: { 
        fontSize: 34, 
        color: '#333', 
    }, 
});
export default styles;
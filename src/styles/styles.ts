import { StyleSheet } from 'react-native';

export const bluetoothStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        height: 40,
        width: "100%",
        justifyContent: "flex-end",
        position: "absolute",
        zIndex: 2
    },
    headerArrowBack: {
        width: 40,
        height: 30,
        marginLeft: 10,
    },
    toggleButtonContainer: {
        borderBottomWidth: 1,
        borderBottomColor:'#ccc' 
    },
    toggleButton: {
        width: 100,
        height: 100,
        // backgroundColor: '#35baf6',
        borderWidth: 10,
        borderColor: "#35baf6",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        // border: "1px solid #badbcc",
        marginVertical:20,
    },
    toggleButtonText: {
        color: "#000000",
    },
    footer: {
        height: 50, 
        width: "100%", 
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sucessAlert: {
        backgroundColor: "#d1e7dd",
        borderColor: "#badbcc",
    },
    successAlertText: {
        color:"#0f5132",
    },
    deniedAlert: {
        backgroundColor:"#f8d7da",
        borderColor: "#f5c2c7",
        borderWidth: 1
    },
    deniedAlertText: {
        color: "red"
    }
})

export const page2Screen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    header: {
        height: 40,
        width: "100%",
        justifyContent: "flex-end",
        position: "absolute",
        zIndex: 2
    },
    headerArrowBack: {
        width: 40,
        height: 30,
        marginLeft: 10,
    },
    mainContent: {
        flex: 1,
        justifyContetnt:"center",
        alignItems:'center',
        borderRadiusTopLeft: 20
    },
    toggleButtonContainer: {
        borderBottomWidth: 1,
        borderBottomColor:'#ccc' 
    },
    toggleButton: {
        width: 100,
        height: 100,
        // backgroundColor: '#35baf6',
        borderWidth: 10,
        borderColor: "#35baf6",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        // border: "1px solid #badbcc",
        marginVertical:20,
    },
    toggleButtonText: {
        color: "#000000"
    },
    buttonInfo: {
        height: 100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        margin: 15,
        backgroundColor: 'red',
        borderColor: "#b6effb"
    }, 
    textButtonInfo: {
        color: '#fff',
    }
})
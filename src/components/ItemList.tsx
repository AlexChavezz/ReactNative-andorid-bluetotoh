import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusContext } from '../context/StatusContext';

export const Item = (props) => {
    console.log(props)
    // const { name, address, id } = pro;
    const { setIsConnected, setDeviceConnected } = useContext(StatusContext);
    const navigator = useNavigation();
    async function connectTo() {
        console.log(props.id)
        try{
            const res = await BluetoothSerial.connect(props.id);
            console.log("respuesta" + res);
            if( res ){
                setIsConnected( true );
                setDeviceConnected( props.name );
                navigator.navigate("ListeningPage");
            }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={connectTo}
        >
            <Text
                style={{ color: 'black', fontSize: 15 }}
            >
                {
                    props.name
                }
            </Text>
            <Text
                style={{ fontSize: 13 }}
            >
                {
                    props.address
                }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        border: 4,
        borderColor: 'red',
        marginTop: 20,
    }
})
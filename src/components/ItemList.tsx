import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusContext } from '../context/StatusContext';

export const Item = ({ name, address, id }) => {
    // const { name, address, id } = pro;
    const { setIsConnected, setDeviceConnected } = useContext(StatusContext);
    const navigator = useNavigation();
    async function connectTo() {
        const res = await BluetoothSerial.connect(id);
        console.log(res)
        setIsConnected( true );
        setDeviceConnected( name );
        navigator.navigate("Page2Screen", {name:"someone"})
    }
    // console.log(props)
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={connectTo}
        >
            <Text
                style={{ color: 'black', fontSize: 15 }}
            >
                {
                    name
                }
            </Text>
            <Text
                style={{ fontSize: 13 }}
            >
                {
                    address
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
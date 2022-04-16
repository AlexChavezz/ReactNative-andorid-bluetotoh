import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ConectedContext } from '../context/ConectedContext';

export const Item = ({ item }) => {
    const { name, address, id } = item;
    async function connectTo() {
        await BluetoothSerial.connect(id);
    }

    return (
        <TouchableOpacity
            style={{ backgroundColor: '#ccc' }}
            onPress={connectTo}
        >
            <Text
                style={{ color: 'black' }}
            >
                {
                    name
                }
            </Text>
            <Text>
                {
                    address
                }
            </Text>
        </TouchableOpacity>
    );
}
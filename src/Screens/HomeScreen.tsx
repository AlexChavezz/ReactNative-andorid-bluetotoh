import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { Item } from '../components/ItemList';
import { useDevices } from '../hooks/useDevices';

export const HomeScreen = ({ navigation }) => {

    const navigator = useNavigation();

    const [isBluetoothEnable, setIsBluetoothenable] = useState(false);

    const [pairedDevices, getDevices, clearPairedDevices] = useDevices();

    useEffect(() => {
        BluetoothSerial.isEnabled()
            .then(res => {
                setIsBluetoothenable(res)
                getDevices();
            });
    }, [])

    async function activeBluetoothRequest() {
        try {
            const response = await BluetoothSerial.requestEnable();
            if (response) setIsBluetoothenable(response);
            getDevices();
        } catch (error) {
            if (error) setIsBluetoothenable(false);
        }
    }
    async function turnOffBluetooth() {
        const response = await BluetoothSerial.disable();
        if (response) setIsBluetoothenable(false); clearPairedDevices();
    }
    return (
        <View
            style={styles.container}
        >
            {
                !isBluetoothEnable ?
                    (
                        <ToggleButtonBluetooth
                            title="ON"
                            onPress={activeBluetoothRequest}
                            buttonStyle={styles.toggleButton}
                            textStyle={styles.toggleButtonText}
                        />
                    )
                    :
                    (
                        <ToggleButtonBluetooth
                            title="OFF"
                            onPress={turnOffBluetooth}
                            buttonStyle={styles.toggleButton}
                            textStyle={styles.toggleButtonText}
                        />
                    )
            }
            <View>
                <FlatList
                    data={pairedDevices}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white"
    },
    toggleButton: {
        width: 100,
        height: 40,
        backgroundColor: '#35baf6',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center"
    },
    toggleButtonText: {
        color: 'white'
    }
})
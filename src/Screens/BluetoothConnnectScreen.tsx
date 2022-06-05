import React, { useEffect, useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import { useDevices } from '../hooks/useDevices';
import { StatusContext } from '../context/StatusContext';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { DeviceList } from '../components/DeviceList';
import { bluetoothStyles as styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { RotationGestureHandler } from 'react-native-gesture-handler';

export const BluetoothConnnectScreen = () => {
    const [isBluetoothEnable, setIsBluetoothEnable] = useState(false);
    const { isConnected, setIsConnected } = useContext(StatusContext);
    const [pairedDevices, getDevices, clearPairedDevices] = useDevices();
    const navigator = useNavigation();
    useEffect(() => {
        if (isConnected) {
            navigator.navigate("ListeningPage");
        }
            BluetoothSerial.isEnabled()
                .then(res => {
                    setIsBluetoothEnable(res);
                    getDevices();
                });
    }, [])

    async function activeBluetoothRequest() {
        try {
            const response = await BluetoothSerial.requestEnable();
            if (response) setIsBluetoothEnable(response);
            getDevices();
        } catch (error) {
            if (error) setIsBluetoothEnable(false);
        }

    }
    async function turnOffBluetooth() {
        const response = await BluetoothSerial.disable();
        if (response) setIsBluetoothEnable(false); clearPairedDevices();
        setIsConnected(false);
    }
    // function isConected() {
    //     BluetoothSerial.isConnected()
    //         .then((res) => { if (res) setIsConnected(res) })
    // }

    // function writeSomething(letter: string) {
    //     BluetoothSerial.write(letter).then(console.log).catch(e => console.log("error"))
    // }
    return (
        <View
            style={styles.container}
        >
            <Header />
            <View
                style={styles.toggleButtonContainer}
            >
                <ToggleButtonBluetooth
                    title={isBluetoothEnable ? "OFF" : "ON"}
                    onPress={isBluetoothEnable ? turnOffBluetooth : activeBluetoothRequest}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
            </View>

            <DeviceList
                pairedDevices={pairedDevices}
                isBluetoothEnable={isBluetoothEnable}
            />
        </View>
    );
}
import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { useDevices } from '../hooks/useDevices';
import { DeviceList } from '../components/DeviceList';
import { bluetoothStyles as styles } from '../styles/styles';
import { LogBox } from 'react-native';
import { StatusContext } from '../context/StatusContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';

// -> This ignore problem react-native-gesture-handler 
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const BluetothScreen = () => {
    const [isBluetoothEnable, setIsBluetoothEnable] = useState(false);
    const { isConnected, setIsConnected } = useContext(StatusContext);
    const [pairedDevices, getDevices, clearPairedDevices] = useDevices();
    const navigator = useNavigation();

    useEffect(() => {
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
    // async function getDevicesNew() {
    //     const devices = await BluetoothSerial.discoverUnpairedDevices();
    //     console.log(devices)
    // }
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

            <View
                style={isConnected ? [styles.footer, styles.sucessAlert] : [styles.footer, styles.deniedAlert]}
            >
                <Text
                    style={isConnected ? styles.successAlertText : styles.deniedAlertText}
                >
                    {isConnected ? "Conectado" : "Desconectado"}
                </Text>
            </View>
        </View>
    );
}
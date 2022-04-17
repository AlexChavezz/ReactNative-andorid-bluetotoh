import React, { useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial, { read } from 'react-native-bluetooth-serial-next';
import { Item } from '../components/ItemList';
import { useDevices } from '../hooks/useDevices';
import { DeviceList } from '../components/DeviceList';

import { LogBox } from 'react-native';
import { StatusContext } from '../context/StatusContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const HomeScreen = () => {

    const navigator = useNavigation();

    const [isBluetoothEnable, setIsBluetoothEnable] = useState(false);
    const [pairedDevices, getDevices, clearPairedDevices] = useDevices();
    const { setIsConnected, setDeviceConnected } = useContext(StatusContext);
    useEffect(() => {
        BluetoothSerial.isEnabled()
            .then(res => {
                setIsBluetoothEnable(res)
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
    async function getDevicesNew() {
        const devices = await BluetoothSerial.discoverUnpairedDevices();
        console.log(devices)
    }
    function isConected() {
        BluetoothSerial.isConnected()
            .then((res) => { if (res) setIsConnected(res) })
    }
    function writeSomething(letter: string) {
        BluetoothSerial.write(letter).then(console.log).catch(e => console.log("error"))
    }
    // async function readSomething() {
    //     window.setInterval(() => {
    //         BluetoothSerial.readFromDevice()
    //             .then(response => {
    //                 if (response === 'L') {
    //                     navigator.navigate("Page2Screen", { name: "alexis chavez" })
    //                 }
    //             })

    //     }, 1500)
    // }
    const names = ["alexis", "diego", "melissa", "jose", "pedro", "maria", "rita", "david", "jesus", "Lucia", "Andrea", " Eduardo", "Galileo", "Elias"];
    return (
        <View
            style={styles.container}
        >
            <ToggleButtonBluetooth
                title={isBluetoothEnable ? "APAGAR" : "ENCENDER"}
                onPress={isBluetoothEnable ? turnOffBluetooth : activeBluetoothRequest}
                buttonStyle={styles.toggleButton}
                textStyle={styles.toggleButtonText}
            />
            {
                isBluetoothEnable &&
                <DeviceList
                pairedDevices={pairedDevices}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    toggleButton: {
        width: 100,
        height: 40,
        backgroundColor: '#35baf6',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        border: "1px solid #badbcc",
        marginVertical:20,
    },
    toggleButtonText: {
        color: "#fff",
    },
})
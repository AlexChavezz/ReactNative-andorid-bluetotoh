import React, { useState, useEffect, useContext } from 'react'
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { View, Text, StyleSheet, NativeModules, NativeEventEmitter } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial, { read } from 'react-native-bluetooth-serial-next';
import { Item } from '../components/ItemList';
import { useDevices } from '../hooks/useDevices';
import { ConectedContext } from '../context/ConectedContext';
// import BleManager from 'react-native-ble-manager';

// const BleManagerModule = NativeModules.BleManager;
// const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
export const HomeScreen = ({ navigation }) => {

    const navigator = useNavigation();

    const [isBluetoothEnable, setIsBluetoothenable] = useState(false);
    const [pairedDevices, getDevices, clearPairedDevices] = useDevices();
    const { isConnected, setIsConnected } = useContext(ConectedContext);
    useEffect(() => {
        BluetoothSerial.isEnabled()
            .then(res => {
                setIsBluetoothenable(res)
                getDevices();
            });
    }, [])
    // useEffect(() => {
    //     window.setInterval(() => {
    //         BluetoothSerial.readFromDevice()
    //         .then( console.log )
            
    //     }, 1000)
    // }, [])

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
    async function readSomething() {
        window.setInterval(() => {
            BluetoothSerial.readFromDevice()
            .then(response => {
                if( response === 'L'){
                    navigator.navigate("Page2Screen", {name:"alexis chavez"})
                }
            })
            
        }, 1500)
    }
    const names = ["alexis", "diego", "melissa"];
    return (
        <View
            style={styles.container}
        >
            <View
                style={isConnected ? styles.connected : styles.discconected}
            >
                {
                    isConnected ?
                        <Text
                            style={styles.statusText}
                        >Conectado</Text>
                        :
                        <Text
                            style={styles.statusText}
                        >Desconectado</Text>
                }
            </View>
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
                {
                    pairedDevices.map(device => <Item {...device} key={device.id} />)
                }
                {/* <FlatList
                    data={pairedDevices}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                /> */}

                <ToggleButtonBluetooth
                    title="ON"
                    onPress={() => writeSomething("F")}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
                <ToggleButtonBluetooth
                    title="OFF"
                    onPress={() => writeSomething("A")}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
                <ToggleButtonBluetooth
                    title="Read"
                    onPress={readSomething}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
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
    },
    connected: {
        height: 40,
        backgroundColor: "#d1e7dd",
        border: "1px solid #badbcc",
        alignItems: 'center',
        justifyContent: 'center'
    },
    discconected: {
        height: 40,
        backgroundColor: "#f8d7da",
        border: "1px solid #f5c2c7",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textConnected: {
        color: "#0f5132",
    },
    textDisconnected: {
        color: '#842029',
    }

})
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

export const Page2Screen = () => {
    const [isListenning, setIsListening] = useState(false);
    const [value, setValue] = useState<string>(null);
    async function readSomething() {
        setIsListening(true);
        window.setInterval(() => {
            BluetoothSerial.readFromDevice()
                .then(response => {
                    console.log(response);
                   setValue(response);
                })

        }, 1500)
    }
    return (
        <View
            style={styles.container}
        >
            <ToggleButtonBluetooth
                title={isListenning ? "ESCUCHANDO" : "ESCUCHAR"}
                onPress={ readSomething }
                buttonStyle={styles.toggleButton}
                textStyle={styles.toggleButtonText}
            />
            {
                value === "L" &&
                <Text>This Works</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 20,
    },
    toggleButtonText: {
        color: "#fff"
    }
})
import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { page2Screen as styles } from '../styles/styles';
import { Capa1, Capa2, Capa3, Capa4, Capa5, Capa6, Capa7 } from '../components/capas';
import { Header } from '../components/Header';

export const ListeningPage = () => {
    const [isListenning, setIsListening] = useState(false);
    const [value, setValue] = useState<string>(null);
    const intervalRef = useRef(null);
    function readSomething() {
        setIsListening(!isListenning);
        if (!isListenning) return;
        intervalRef.current = window.setInterval(() => {
            BluetoothSerial.readFromDevice()
                .then((response) => {
                    console.log(response)
                    if (response === '') {
                        return;
                    }
                    if (response !== value) {
                        setValue(response);
                        console.log(response)
                    }
                })
        }, 1500)
    }
    function clearInterval() {
        window.clearInterval(intervalRef.current);
    }
    return (
        <View
            style={styles.container}
        >
            <Header />
            <View
                style={styles.toggleButtonContainer}
            >
                <ToggleButtonBluetooth
                    title={isListenning ? "..." : "ESCUCHAR"}
                    onPress={isListenning ? clearInterval : readSomething}
                    buttonStyle={isListenning ? [styles.toggleButton, { borderColor: "green" }] : styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
            </View>
            <View
                style={styles.mainContent}
            >
                {/* 
                    Here will go every content 
                */}
                {
                    value === '1' && <Capa1 />
                }
                {
                    value === '2' && <Capa2 />
                }
                {
                    value === '3' && <Capa3 />
                }
                {
                    value === '4' && <Capa4 />
                }
                {
                    value === '5' && <Capa5 />
                }
                {
                    value === '6' && <Capa6 />
                }
                {
                    value === "7" && <Capa7 />
                }
            </View>
        </View>
    );
}
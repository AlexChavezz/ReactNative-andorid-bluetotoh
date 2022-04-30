import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { page2Screen as styles } from '../styles/styles';
import { Header } from '../components/Header';
import { Capa1 } from '../components/capas/Capa1';
import { Capa2 } from '../components/capas/Capa2';
import { Capa3 } from '../components/capas/Capa3';
import { Capa4 } from '../components/capas/Capa4';
import { Capa5 } from '../components/capas/Capa5';
import { Capa6 } from '../components/capas/Capa6';
import { Capa7 } from '../components/capas';

export const ListeningPage = () => {
    const [isListenning, setIsListening] = useState(false);
    const [value, setValue] = useState<string>(null);
    function readSomething() {
        setIsListening(!isListenning);
        if (!isListenning) return;
        window.setInterval(() => {
            BluetoothSerial.readFromDevice()
                .then((response) => {
                    console.log(response)
                    if( response === ''){
                        return;
                    }
                    if (response !== value) {
                        setValue(response);
                    }
                })
        }, 1500)
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
                    onPress={readSomething}
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
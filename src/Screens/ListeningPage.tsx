import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ToggleButtonBluetooth } from '../components/ToggleButtonBluetooth';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { page2Screen as styles } from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const ListeningPage = () => {
    const navigator = useNavigation();
    const [isListenning, setIsListening] = useState(true);
    const [value, setValue] = useState<string>(null);
    function readSomething() {
        setIsListening(!isListenning);
        if (!isListenning) return;
        window.setInterval(() => {
            BluetoothSerial.readFromDevice()
                .then((response) => {
                    if (response !== value) {
                        setValue(response);
                    }
                })
        }, 1500)
    }
    function goBack() {
        navigator.goBack();
    }
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.header}
            >
                <TouchableOpacity
                    onPress={goBack}
                >
                    <Image
                        source={require("../assets/back-arrow.png")}
                        style={styles.headerArrowBack}
                    />
                </TouchableOpacity>
            </View>
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
            </View>
        </View>
    );
}
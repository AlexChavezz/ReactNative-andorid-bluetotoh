import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const InitialScreen = () => {
    const navigator = useNavigation();
    function goToNormalWay() {
        navigator.navigate("NormalScreen");
    }
    function goToBluetoothWay() {
        navigator.navigate("BluetothScreen");
    }
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.welcomeContainer}
            >
                <Text
                    style={styles.welcomeText}
                >
                    BIENVENIDO!
                </Text>
                <Text>Modelo OSI</Text>
            </View>
            <View style={{ marginVertical: 50, justifyContent:"space-around", height: 200 }}>
                <Button title="TEÓRICO" onPress={goToNormalWay} />
                <Text
                    style={styles.orText}
                >
                    o
                </Text>
                <Button title="PRÁCTICO" onPress={goToBluetoothWay} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    welcomeContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    welcomeText: {
        fontSize: 30,
        color: 'black'
    },
    orText: {
        fontSize: 20,
        color: 'black',
        textAlign: "center",
    }
})
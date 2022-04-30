import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Capa3 = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 70 }}>
                <Image
                    source={require("../../assets/network.png")}
                    style={{ alignSelf: 'center', width: 250, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Internet</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Este medio decide la ruta por la que la información (datos) fluirá.</Text>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

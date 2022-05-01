import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Capa1 = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 70 }}>
                <Image
                    source={require("../../assets/psycal.png")}
                    style={{ alignSelf: 'center', width: 250, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa Fisica</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>La capa física de OSI proporciona los medios de transporte de los bits que conforman una trama de la capa de enlace de datos a través de los medios de red.</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

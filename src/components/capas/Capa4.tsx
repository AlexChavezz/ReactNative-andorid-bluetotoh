import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Capa4Props {
    withoutm?: boolean,
}


export const Capa4 = ({withoutm}:Capa4Props) => {
    return (
        <View style={styles.container}>
            <View style={withoutm?{  }:{ marginTop: 70 }}>
                <Image
                    source={require("../../assets/trasnport.png")}
                    style={{ alignSelf: 'center', width: 150, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Transporte</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Controla el transporte de datos mediante protocolos de transmicion, TCP y UDP.</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

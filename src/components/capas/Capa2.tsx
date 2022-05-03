import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
interface Capa2Props {
    withoutm?: boolean,
}
export const Capa2 = ({ withoutm}:Capa2Props) => {
    return (
        <View style={styles.container}>
             <View style={withoutm?{  }:{ marginTop: 70 }}>
                <Image
                    source={require("../../assets/data.webp")}
                    style={{ alignSelf: 'center', width: 250, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Datos</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Esta capa define el formato de los datos transmitidos por la red.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

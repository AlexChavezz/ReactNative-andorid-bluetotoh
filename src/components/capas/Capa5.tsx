import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Capa5Props {
    withoutm?: boolean,
}


export const Capa5 = ({withoutm}:Capa5Props) => {
    return (
        <View style={styles.container}>
             <View style={withoutm?{  }:{ marginTop: 70 }}>
                <Image
                    source={require("../../assets/sesion.webp")}
                    style={{ alignSelf: 'center', width: 250, height: 150 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Sesión</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Es la responsable de mantener sesiones, y es la responsable de controlar tanto los puertos como las sesiones.</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

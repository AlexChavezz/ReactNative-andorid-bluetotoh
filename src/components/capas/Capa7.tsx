import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Capa7Props {
    withoutm?: boolean,
}

export const Capa7 = ({withoutm}:Capa7Props) => {
    return (
        <View style={styles.container}>
              <View style={withoutm?{  }:{ marginTop: 70 }}>
            <Image
                    source={require("../../assets/http.png")}
                    style={{ alignSelf: 'center', width: 150, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Aplicacion</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Esta es la capa de los protocolos, osea de interacción hombre-maquina en donde se accede a permisos de red mediante reglas o mejor dicho protocolos.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export const ModeloOsi = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginTop: 70 }}>
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>MODELO  OSI</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Es un modelo de referencia para los protocolos de la red, creado en el año 1980 por la Organización Internacional de Normalización.</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Herramienta de enseñanza que muestra diferentes tareas dentro de una red.</Text>
                <Image
                    source={require("../../assets/modeloOsi.png")}
                    style={{ alignSelf: 'center', width: 200, height: 250 }}
                />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

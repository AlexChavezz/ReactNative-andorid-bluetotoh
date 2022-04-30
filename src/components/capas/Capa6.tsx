import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Capa6 = () => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 70 }}>
                <Image
                    source={require("../../assets/png.png")}
                    style={{ alignSelf: 'center', width: 150, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Presentación</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Esta es la capa que nos proporciona un formato utilizable como jpg, png, text, etc.</Text>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
})

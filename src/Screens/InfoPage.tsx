import { Text, View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';

export const InfoPage = ({ route }) => {
    const { arg } = route.params;
    // if( arg === 1 ){
    //     return <Text>Capa 1 Fisica</Text>
    // }
    // else if( arg == 2 ){
    //     return <Text>Capa 2 Fisica</Text>
    // }else if
    const navigation = useNavigation();

    if (arg === 1) {
        return (
            <Content>
                <Image
                    source={require("../assets/psycal.png")}
                    style={{ alignSelf: 'center', width: 250, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa Física</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Esta capa transmite el flujo de bits sin procesar a través de un medio físico como los cables.</Text>
            </Content>
        );

    } else if (arg === 2) {
        return (
            <Content>
                <Image
                    source={require("../assets/data.webp")}
                    style={{ alignSelf: 'center', width: 250, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Internet</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Esta capa define el formato de los datos transmitidos por la red.</Text>
            </Content>
        );

    } else if (arg === 3) {
        return (
            <Content>
                <Image
                    source={require("../assets/network.png")}
                    style={{ alignSelf: 'center', width: 250, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Internet</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Este medio decide la ruta por la que la información (datos) fluirá.</Text>
            </Content>
        );

    } else if (arg === 4) {
        return (
            <Content>
                <Image
                    source={require("../assets/trasnport.png")}
                    style={{ alignSelf: 'center', width: 150, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Transporte</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Controla el transporte de datos mediante protocolos de transmicion, TCP y UDP.</Text>
            </Content>
        );

    } else if (arg === 5) {
        return (
            <Content>
                <Image
                    source={require("../assets/sesion.webp")}
                    style={{ alignSelf: 'center', width: 250, height: 150 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Sesión</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Es la responsable de mantener sesiones, y es la responsable de controlar tanto los puertos como las sesiones.</Text>
            </Content>
        );

    } else if (arg === 6) {
        return (
            <Content>
                <Image
                    source={require("../assets/png.png")}
                    style={{ alignSelf: 'center', width: 150, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Precentación</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Esta capa nos proporciona un formato utilizable como jpg, png, txt, etc.</Text>
            </Content>
        );

    } else if (arg === 7) {
        return (
            <Content>
                <Image
                    source={require("../assets/http.png")}
                    style={{ alignSelf: 'center', width: 150, height: 200 }}
                />
                <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Capa de Aplicacion</Text>
                <Text style={{ marginTop: 20, padding: 10, color: "black" }}>Esta es la capa de los protocolos, osea de interacción hombre-maquina en donde se accede a permisos de red mediante reglas o mejor dicho protocolos.</Text>
            </Content>
        );

    }
}

interface ContentProps {
    children: React.ReactElement | React.ReactElement[]
    something: string
}

const Content = ({ children }: ContentProps) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{ marginTop: 70 }}>
                {
                    children
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
    image: { alignSelf: 'center', width: 150, height: 200 }
})

import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';


export const NormalScreen = () => {
    const navigator = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <Header />
            <ScrollView>
                <View
                    style={styles.cardsContainer}
                >
                    <TouchableOpacity
                        style={[styles.card, { width: 260 }]}
                        activeOpacity={.7}
                        onPress={()=>{
                            navigator.navigate("InfoPage", { arg:0})
                        }}
                    >

                        <Text
                            style={styles.cardText}
                        >
                            Modelo OSI
                        </Text>
                    </TouchableOpacity>
                    <Card
                        color="#ebc7f1"
                        title="Application"
                        arg={7}
                    >
                        <Image
                            source={require("../assets/http.png")}
                            style={styles.cardImage}
                        />
                    </Card>
                    <Card
                        color="#d791b3"
                        title="Presentacion"
                        arg={6}
                    >
                        <Image
                            source={require("../assets/png.png")}
                            style={styles.cardImage}
                        />
                    </Card>
                    <Card
                        color="#b3afff"
                        title="Sesion"
                        arg={5}
                    >
                        <Image
                            source={require("../assets/sesion.webp")}
                            style={styles.cardImage}
                        />
                    </Card>
                    <Card
                        color="#97d1f8"
                        title="Transporte"
                        arg={4}
                    >
                        <Image
                            source={require("../assets/trasnport.png")}
                            style={styles.cardImage}
                        />
                    </Card>
                    <Card
                        color="#e7f1a0"
                        title="Internet"
                        arg={3}
                    >
                        <Image
                            source={require("../assets/network.png")}
                            style={styles.cardImage}
                        />
                    </Card>
                    <Card
                        color="#ffcf9b"
                        title="Datos"
                        arg={2}
                    >
                        <Image
                            source={require("../assets/data.webp")}
                            style={styles.cardImage}
                        />
                    </Card>
                    <Card
                        color="#feafaf"
                        title="Fisica"
                        arg={1}
                    >
                        <Image
                            source={require("../assets/psycal.png")}
                            style={styles.cardImage}
                        />
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}

interface CardProps {
    color: string,
    title: string,
    arg: number,
    children?: ReactElement | ReactElement[],

}

const Card = ({ color, title, arg, children }: CardProps) => {
    const navigator = useNavigation();
    const onPress = () => {
        navigator.navigate("InfoPage", {
            arg,
        })
    }

    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: color }]}
            activeOpacity={.7}
            onPress={onPress}
        >
            {
                children
            }
            <Text
                style={styles.cardText}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: 40,
        width: "100%",
        justifyContent: "flex-end",
        position: "absolute",
        zIndex: 2,
    },
    headerArrowBack: {
        width: 40,
        height: 30,
        marginLeft: 10,
    },
    mainImage: {
        width: "100%",
        backgroundColor: 'red'
    },
    image: {
        width: "100%",
        height: 200,
        opacity: 1
    },
    cardsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: 'wrap',
        // backgroundColor:'red',
        marginTop: 50
    },
    card: {
        margin: 20,
        width: 100,
        height: 100,
        backgroundColor: "#ebc7f1",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    cardText: {
        color: 'black',
        fontSize: 13,
        // fontWeight: "bold"
    },
    cardImage: {
        width: 50,
        height: 50
    }
})
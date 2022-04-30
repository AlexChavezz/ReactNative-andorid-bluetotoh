import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const Header = () => {
    const navigation = useNavigation();
    function goBack(){
        navigation.goBack();
    }
    return (
        <View
            style={styles.header}
        >
            <TouchableOpacity
                onPress={goBack}
            >
                <Image
                    source={require("../assets/back-arrow.png")}
                    style={styles.headerArrowBack}
                />
            </TouchableOpacity>
            {
            }
        </View>
    )
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
})
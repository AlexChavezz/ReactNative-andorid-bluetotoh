import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { bluetoothStyles as styles } from '../styles/styles';
import { LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { BluetoothConnnectScreen } from './BluetoothConnnectScreen';
import { ListeningPage } from './ListeningPage';
import { StatusContext } from '../context/StatusContext';
// -> This ignore problem react-native-gesture-handler 
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

export const BluetoothScreen = () => {

    const { isConnected } = useContext(StatusContext);

    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="BluetoothConnnectScreen" component={BluetoothConnnectScreen} />
                <Stack.Screen name="ListeningPage" component={ListeningPage} />
            </Stack.Navigator>
            <View
                style={isConnected ? [styles.footer, styles.sucessAlert] : [styles.footer, styles.deniedAlert]}
            >
                <Text
                    style={isConnected ? styles.successAlertText : styles.deniedAlertText}
                >
                    {isConnected ? "Conectado" : "Desconectado"}
                </Text>
            </View>
        </>
    );
}
//BluetoothScreen
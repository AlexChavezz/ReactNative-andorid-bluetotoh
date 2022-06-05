import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListeningPage } from '../Screens/ListeningPage';
import { InitialScreen } from '../Screens/InitialScreen';
import { NormalScreen } from '../Screens/NormalScreen';
import { InfoPage } from '../Screens/InfoPage';
import { BluetoothScreen } from '../Screens/BluetoothScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
                // headerStyle: {
                //     elevation: 0,
                //     backgroundColor: "#2b2c34",
                // },
                // headerTintColor: "#fff",
                // headerTitleStyle: {
                //     fontWeight:'bold',
                //     fontSize: 15
                // },
                // cardStyle: {
                //     backgroundColor: 'white'
                // }
            }}
        >
            <Stack.Screen name="InitialScreen" component={ InitialScreen } />
            <Stack.Screen name="NormalScreen" component={ NormalScreen }/>            
            <Stack.Screen name="InfoPage" component={InfoPage}/>
            <Stack.Screen name="BluetoothScreen" component={ BluetoothScreen } />
        </Stack.Navigator>
    );
}
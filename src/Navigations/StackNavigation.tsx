import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { Page2Screen } from '../Screens/Page2Screen';
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
            <Stack.Screen name="Modelo OSI" component={ HomeScreen } />
            <Stack.Screen name="Page2Screen" component={ Page2Screen } />
        </Stack.Navigator>
    );
}